import { Component, OnInit,AfterViewInit } from '@angular/core';
import {NgxSmartModalService} from 'ngx-smart-modal'
import { Imovie } from '../shared/imovie';
import{ MovieServicesService } from '../services/movie-services.service'
@Component({
  selector: 'app-movies-update',
  templateUrl: './movies-update.component.html',
  styleUrls: ['./movies-update.component.css'],
  providers:[MovieServicesService]
})
export class MoviesUpdateComponent implements OnInit,AfterViewInit {
   objMovie: Imovie;
  constructor(public ngxSmartModalService: NgxSmartModalService,private _movieService:MovieServicesService) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
  

    this.ngxSmartModalService.setModalData(this.objMovie, 'myModal')
   
  }
  OpenModel(id:number)
  {

    this.objMovie =  this._movieService.GetMovieAsPerId(id);
    this.ngxSmartModalService.getModal('myModal').open();
    
  } 
  Reset()
  {
    this.objMovie.Name="";
    this.objMovie.Year="";
    this.objMovie.Director="";
    this.objMovie.Actors="";
  }
  Update()
  {
    console.log(this.objMovie);
  }
}

