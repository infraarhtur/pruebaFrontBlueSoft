import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//#region modules
import { AutorModule } from './modules/autor/autor.module';
import { CategoriaModule } from './modules/categoria/categoria.module';
import { LibroModule } from './modules/libro/libro.module';
//#endregion modules

import { AppComponent } from './app.component';
import { NavbarComponent } from './generals/components/navbar/navbar.component';
import { HomeComponent } from './generals/components/home/home.component';

//#region routing
import {AppRoutingModule } from '../app/app.routing';
//#endregion routing

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),

    AutorModule,
    CategoriaModule,
    LibroModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
