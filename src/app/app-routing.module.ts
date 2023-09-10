import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatsListComponent } from './cats-list/cats-list.component';
import { RankCatsComponent } from './rank-cats/rank-cats.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path:'', component: RankCatsComponent},
  { path: 'cats', component: CatsListComponent},
  { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
