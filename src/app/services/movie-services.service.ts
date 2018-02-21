import { Injectable,OnInit } from '@angular/core';
import{ Cmovie } from '../shared/cmovie'
import{Imovie} from '../shared/imovie'
@Injectable()
export class MovieServicesService implements OnInit {
  MoviesDetail:Imovie[];
  constructor( private Cmovie:Cmovie ) { }

  ngOnInit()
  {
    
  }
  GetAllMovies()
  {
    this.MoviesDetail=this.Cmovie.Imovies;
  }
  GetMoviesAsPerPage(pageNumber:number,Genre:string,)
  {
    this.MoviesDetail=this.Cmovie.Imovies(movie=>movie.);
  }
}
