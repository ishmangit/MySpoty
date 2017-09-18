import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas: any [] = [];
  urlBusqueda = 'https://api.spotify.com/v1/search';
  urlArtista = 'https://api.spotify.com/v1/artists';

  headers = new Headers();

  constructor( private http: Http ) {
    this.headers.append( 'authorization',
    'Bearer BQAxJpMQL5tl1KSBvxZOyyYW9Th0UeV4DvX4GWgj_XB52iF581aru7kgC9EGd2RUWbY2aWQ1G3rn7uasFW5hjg');
  }

  getArtistas( termino: String ) {

    const query = `?q=${ termino }&type=artist`;
    const url = this.urlBusqueda + query;

    const headers = this.headers;

    return this.http.get( url, { headers } )
    .map( res => {
      this.artistas = res.json().artists.items;
    });
  }

  getArtista( id: String ) {
    const query = `/${ id }`;
    const url = this.urlArtista + query;

    const headers = this.headers;

    return this.http.get( url, { headers } )
    .map( res => {
      return res.json();
    });
  }

  getTop( id: String ) {
    const query = `/${ id }/top-tracks?country=US`;
    const url = this.urlArtista + query;

    const headers = this.headers;

    return this.http.get( url, { headers } )
    .map( res => {
      return res.json().tracks;
    });
  }
}
