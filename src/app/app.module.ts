import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'
import { AppComponent } from './app.component';
import { MoviesDetailComponent } from './movies-detail/movies-detail.component';
import { MoviesUpdateComponent } from './movies-update/movies-update.component';
import {ModalModule} from "ng2-modal";
import { NgxSmartModalModule, NgxSmartModalService } from 'ngx-smart-modal';
import {FormsModule} from'@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    MoviesDetailComponent,
    MoviesUpdateComponent,
   
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,Angular2FontawesomeModule,NgxPaginationModule,ModalModule
    ,NgxSmartModalModule.forRoot(),FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
