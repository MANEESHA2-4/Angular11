import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpformComponent } from './empform/empform.component';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { BookCatalogComponent } from './book-catalog/book-catalog.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookformComponent } from './book-form/book-form.component';
import { TabComponent } from './tab/tab.component';
import { PriceDiscountPipe } from './price-discount.pipe';
import { HomeComponent} from './home/home.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'empform', component: EmpformComponent },
    { path: 'book', component: BookCatalogComponent },
    { path: 'Add-book', component: BookformComponent }
  ];
@NgModule({
  declarations: [
    AppComponent,
    EmpformComponent,
    BookComponent,
    BookCatalogComponent,
    BookListComponent,
    BookformComponent,
    TabComponent,
    PriceDiscountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
