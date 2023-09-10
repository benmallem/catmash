import { Component, HostBinding } from "@angular/core";
import { Cat, CatImages } from "../shared/types/cat.types";
import { CatService } from "../shared/services/cat.service";
import { Observable, catchError, map, of } from "rxjs";

@Component({
  selector: 'app-cats-list',
  templateUrl: './cats-list.component.html',
  styleUrls: ['./cats-list.component.scss'],
})
export class CatsListComponent {
  @HostBinding('class.cats-list') componentClass = true;

  public currentSequence: number = 1;
  public imagePerSequence: number = 10;
  public cats$!: Observable<Cat[]>;

  constructor(private catService:CatService){}

  ngOnInit(): void{
    this.cats$ = this.catService.cats.length > 0 ? this.catService.catsObservable :
    this.catService.getCats().pipe(
      map((response: CatImages)=> this.catService.addScoreToCats(response.images)),
      catchError(()=> of([])),
    )
  }

  public loadCats(): void{
    this.currentSequence++;
  }
}
