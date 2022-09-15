import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksListRoutingModule } from './list-routing.module';
import { ListBooksComponent } from './list-books/list-books.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoriesListComponent } from './stories-list/stories-list.component';


@NgModule({
  declarations: [ListBooksComponent, StoriesListComponent],
  imports: [
    CommonModule,
    BooksListRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class BooksListModule { }
