import { Component, HostBinding, OnInit } from "@angular/core";
import { CatService } from "../shared/services/cat.service";
import { Cat, CatImages } from "../shared/types/cat.types";
import { Observable, catchError, map, of, startWith, tap } from "rxjs";

@Component({
  selector: 'app-rank-cats',
  templateUrl: './rank-cats.component.html',
  styleUrls: ['./rank-cats.component.scss'],
})
export class RankCatsComponent implements OnInit {
  @HostBinding('class.rank-cats') componentClass = true;

  public cats: Cat[];
  public cats$!: Observable<{ isLoading: boolean; cats: Cat[] }>;

  constructor(public catService: CatService){
    this.cats = this.catService.cats;
  }

  ngOnInit(): void {
    this.cats$ = this.catService.getCats()
    .pipe(
      tap((response: CatImages)=> {
        if(!this.cats.length){
          this.catService.cats = this.catService.addScoreToCats(response.images);
          this.cats = this.catService.cats;
        }
      }),
      map(() => ({ isLoading: false, cats: this.catService.selectTwoRandomCats(this.cats)})),
      catchError(() => of({ isLoading: false, cats:[] })),
      startWith({ isLoading: true, cats:[] }),
    );
  }

  public voteForCat(id: string):void{
    const votedCatIndex = this.cats.findIndex((cat)=> cat.id === id);
    const cat = this.cats[votedCatIndex];
    this.cats[votedCatIndex] = {...cat, score: cat.score! + 1 }
    this.catService.cats = this.cats.sort((firstCat, secondCat) => secondCat.score! - firstCat.score!);
    this.cats$ = of({ isLoading: false, cats: this.catService.selectTwoRandomCats(this.cats) });
  }
}
