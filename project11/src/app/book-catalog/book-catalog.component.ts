import { Component, OnInit } from '@angular/core';
import { BookdaoService } from '../bookdao.service';

@Component({
  selector: 'app-book-catlog',
  templateUrl: './book-catalog.component.html',
  styleUrls: ['./book-catalog.component.css']
})
export class BookCatalogComponent implements OnInit {
  books: Array<any> = [];
  constructor(private booksvc: BookdaoService) { }

  ngOnInit(): void {
    this.books = this.booksvc.getBooks();
  }

}