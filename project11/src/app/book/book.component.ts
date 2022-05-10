import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input()
  book: any;
  constructor() { }

  ngOnInit(): void {
  }
  onbuy(book: any) {
    console.log('book added to the cart..' + book.name + '' + book.price)
  }
}