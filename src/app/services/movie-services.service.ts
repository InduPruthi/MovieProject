import { Injectable,OnInit } from '@angular/core';
import{  dtMovies} from '../shared/cmovie'
import{Imovie} from '../shared/imovie'

export class MovieServicesService implements OnInit {
  MoviesDetail:Imovie[];
  constructor( ) { }

  ngOnInit()
  {
    
  }
  GetAllMovies(SearchCriteria:string)
  {
    if(SearchCriteria=="")
    {
    return(dtMovies);
    }
    else{
      let query=movie=>( movie.Actors.includes(SearchCriteria)|| movie.Director.includes(SearchCriteria)|| movie.Year.includes(SearchCriteria)||movie.Name.includes(SearchCriteria));
      return(this.MoviesDetail=dtMovies.filter(query));
    }
  }
  GetMoviesAsPerSearch(pageNumber:number,Genre:string,SearchCriteria: string)
  {
    let query;
    if(SearchCriteria!=null && SearchCriteria!="")
    {
      query=movie=>movie.Genre.includes(Genre)&&( movie.Actors.includes(SearchCriteria)|| movie.Director.includes(SearchCriteria)|| movie.Year.includes(SearchCriteria)||movie.Year.includes(SearchCriteria));
    }
    else
    {
      query=movie=>movie.Genre.includes(Genre);
    }
    return(this.MoviesDetail=dtMovies.filter(query));

  }

  GetMovieAsPerId(Id:number):Imovie
  {
    return(dtMovies.filter(movie=>movie.Id==Id)[0]);
   
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
                        movie.ShortDescription=_movie.ShortDescription;
                      });
}


}