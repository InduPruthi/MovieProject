import { Component, OnInit } from '@angular/core';
import{MovieServicesService} from'../services/movie-services.service';
import { Imovie } from '../shared/imovie';
@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.css'],
  providers:[MovieServicesService]
})
export class MoviesDetailComponent implements OnInit {
  _lstMovies:Imovie[];
  _movie :Imovie;
  constructor( private _movieService:MovieServicesService) { 
    
  }

  ngOnInit() {
   this._lstMovies=this._movieService.GetAllMovies();
 
    
  }
  GetMoviesAsPerSearch(SearchCriteria:string)
  {
    this._lstMovies=this._movieService.GetMoviesAsPerSearch(0,"Action",SearchCriteria);
  }
  UpdateMovieData()
  {
    this._movie={'Id':1,'Name':'Xyz','Director':'bvnb','Genre':'Tp','Star':3,'Year':'1998','Actors':'test','Image':'',}
    this._movieService.UpdateMovieData(this._movie);
  }
}
