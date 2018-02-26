import { Component, OnInit,AfterViewInit ,AfterContentInit} from '@angular/core';
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
export class MoviesDetailComponent implements OnInit,AfterViewInit,AfterContentInit {
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
  UpdateMovieData(Id:number)
  {
    //this._movie={'Id':Id,'Name':'Xyz','Director':'bvnb','Genre':'Tp','Star':3,'Year':'1998','Actors':'test','Image':'',}
    //this._movieService.UpdateMovieData(this._movie);
  }
  menuSelection(value)
  {
    this.selectedItem=value;
    this.GetMoviesAsPerSearch("");
    
  }
  ngAfterViewInit() {
    
  
      
     
    }
    ngAfterContentInit()
    {
      
    }
    OpenModel(id:number)
    {
     
      this.objMovie =  this._movieService.GetMovieAsPerId(id);
      this.ngxSmartModalService.setModalData(this.objMovie, 'myModal')
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
      this._movieService.UpdateMovieData(this.objMovie);
    }
          
 

}
