import { Component, OnInit} from '@angular/core';
import{MovieServicesService} from'../services/movie-services.service';
import { Imovie } from '../shared/imovie';
import{ Genre} from '../shared/genre';
import {NgxSmartModalService} from 'ngx-smart-modal'
@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.css'],
  providers:[MovieServicesService]
})
export class MoviesDetailComponent implements OnInit {
  _lstMovies:Imovie[];
  _movie :Imovie;
  isActive:any;
  selectedItem:string;
  lstGenre:any[];
  p: number;
  objMovie: Imovie;
  constructor( private _movieService:MovieServicesService, public ngxSmartModalService: NgxSmartModalService) { 
    
  }

  ngOnInit() {
   
   this.lstGenre=Genre;
   this.selectedItem="All";
   this._lstMovies=this._movieService.GetAllMovies("");
   this.objMovie=this._lstMovies[0];
    
  }
  GetMoviesAsPerSearch(SearchCriteria:string)
  {
    if(this.selectedItem=='All')
    {
      this._lstMovies=this._movieService.GetAllMovies(SearchCriteria);

     
    }
    else{

    this._lstMovies=this._movieService.GetMoviesAsPerSearch(0,this.selectedItem,SearchCriteria);
    }
}
  
  menuSelection(value)
  {
    this.selectedItem=value;
    this.GetMoviesAsPerSearch("");
    
  }
  
    OpenModel(id:number)
    {
     
      this.objMovie =  this._movieService.GetMovieAsPerId(id);
      this.ngxSmartModalService.setModalData(this.objMovie, 'myModal')
      this.ngxSmartModalService.getModal('myModal').open();
      
    } 
    Reset()
    {
      
      this.objMovie.Year="";
      this.objMovie.Director="";
      this.objMovie.Actors="";
      this.objMovie.ShortDescription="";
      this.objMovie.Genre="";
    }
    Update()
    {
      this._movieService.UpdateMovieData(this.objMovie);
      alert("Saved Successfully");
      this.ngxSmartModalService.getModal('myModal').close();
    }
          
 

}
