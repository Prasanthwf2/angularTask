import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListBooksComponent } from './list-books/list-books.component';
import { StoriesListComponent } from './stories-list/stories-list.component';


const routes: Routes = [
  {path:'',component:ListBooksComponent},
  {path:'movierev',component:ListBooksComponent},
  {path:'stories',component:StoriesListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksListRoutingModule { }
