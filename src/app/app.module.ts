import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { Detail_countryComponent } from './pages/detail_country/detail_country.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    DropdownComponent,
    NavbarComponent,
    HomeComponent,
    Detail_countryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
