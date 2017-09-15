import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas: any [] = [];
  urlBusqueda = 'https://api.spotify.com/v1/search';

  constructor( private http: Http ) { }

  getArtistas( termino: String ) {

    const headers = new Headers();
    headers.append( 'authorization', 'Bearer BQBRGQemJTUo4_HBzzwJap1ZHk7QC5jqq5M68hhNts0ezd4VtITN60LFQr7neR3v37i1YADvYaSANwn05s-cFA' );

    const query = `?q=${ termino }&type=artist`;
    const url = this.urlBusqueda + query;

    return this.http.get( url, { headers } )
    .map( res => {
      this.artistas = res.json().artists.items;
    });
  }
}
