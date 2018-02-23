import { Component, OnInit } from '@angular/core';
import{MovieServicesService} from'../services/movie-services.service';
import { Imovie } from '../shared/imovie';
import{ Genre} from '../shared/genre';
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
  constructor( private _movieService:MovieServicesService) { 
    
  }

  ngOnInit() {
   this._lstMovies=this._movieService.GetAllMovies();
   this.lstGenre=Genre;
   this.selectedItem="All";
    
  }
  GetMoviesAsPerSearch(SearchCriteria:string)
  {
    if(this.selectedItem=='All')
    {
      this._lstMovies=this._movieService.GetAllMovies();
     
    }
    else{

    this._lstMovies=this._movieService.GetMoviesAsPerSearch(0,this.selectedItem,SearchCriteria);
    }
}
  UpdateMovieData(Id:number)
  {
    this._movie={'Id':Id,'Name':'Xyz','Director':'bvnb','Genre':'Tp','Star':3,'Year':'1998','Actors':'test','Image':'',}
    this._movieService.UpdateMovieData(this._movie);
  }
  menuSelection(value)
  {
    this.selectedItem=value;
    this.GetMoviesAsPerSearch("");
    
  }
          
 

}
