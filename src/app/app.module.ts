import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'
import { AppComponent } from './app.component';
import { MoviesDetailComponent } from './movies-detail/movies-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    MoviesDetailComponent
  ],
  imports: [
    BrowserModule,Angular2FontawesomeModule,NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
