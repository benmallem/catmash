import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Cat, CatImages } from "../types/cat.types";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class CatService {
  private catsSubject: BehaviorSubject<Cat[]> = new BehaviorSubject<Cat[]>([]);
  public catsObservable: Observable<Cat[]> = this.catsSubject.asObservable();

  constructor(private http: HttpClient) {}

  public get cats(): Cat[] {
    return this.catsSubject.getValue();
  }

  public set cats(cats: Cat[]) {
    this.catsSubject.next(cats);
  }

  public getCats(): Observable<CatImages>{
    return this.http.get<CatImages>('/api');
  }

  public getRandomCatIndex(cats: Cat[]): number{
    return Math.floor(Math.random() * cats.length);
  }

  public selectTwoRandomCats(cats: Cat[]):Cat[]{
    let firstCatIndex: number;
    let secondCatIndex: number;
    do {
      firstCatIndex = this.getRandomCatIndex(cats);
      secondCatIndex = this.getRandomCatIndex(cats);
    } while (cats[firstCatIndex].id === cats[secondCatIndex].id);

    return [cats[firstCatIndex], cats[secondCatIndex]];
  }

  public addScoreToCats(cats: Cat[]): Cat[]{
    return cats.map((cat: Cat)=> ({...cat, score: 0}));
  }
}
