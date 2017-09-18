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
    'Bearer BQAM6Aju8DW-SVUg9jC6mHfYdgkHeceHmU4CdfD77njgJw2e3M1jiH-NVffI3m_9tZCLlqrJ5Bhx03V1m8tY0Q');
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
