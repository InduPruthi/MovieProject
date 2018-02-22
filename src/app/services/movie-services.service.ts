import { Injectable,OnInit } from '@angular/core';
import{  dtMovies} from '../shared/cmovie'
import{Imovie} from '../shared/imovie'

export class MovieServicesService implements OnInit {
  MoviesDetail:Imovie[];
  constructor( ) { }

  ngOnInit()
  {
    
  }
  GetAllMovies()
  {
    return(dtMovies);
  }
  GetMoviesAsPerSearch(pageNumber:number,Genre:string,SearchCriteria: string)
  {
    let query;
    if(SearchCriteria!=null && SearchCriteria!="")
    {
      query=movie=>movie.Genre.includes(Genre)&&( movie.Actors.includes(SearchCriteria)|| movie.Director.includes(SearchCriteria)|| movie.Year.includes(SearchCriteria));
    }
    else
    {
      query=movie=>movie.Genre.includes(Genre);
    }
    return(this.MoviesDetail=dtMovies.filter(query));

  }

  GetMovieAsPerId(Id:number,)
  {
    this.MoviesDetail=dtMovies.filter(movie=>movie.Id==Id);
   
  }
  UpdateMovieData(_movie : Imovie)
  {
   let index= dtMovies.findIndex(movie=> movie.Id===_movie.Id);
  // dtMovies[index] = _movie;
    dtMovies.filter(movie=>movie.Id===_movie.Id)
                    .filter(movie=>{
                      
                       
                      movie.Genre=_movie.Genre;
                       movie.Year=_movie.Year;
                        movie.Director=_movie.Director
                        movie.Actors=_movie.Actors;
                      });
}


}