import { Injectable } from '@angular/core';
import {Headers, Http, RequestMethod, RequestOptions} from '@angular/http';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from "rxjs/internal/Observable";

@Injectable()
export class VisualizacionResultadosService {

  constructor(
    private http: Http) {}

    getBusqueda(texto): Observable<HttpResponse<any>> {
      let url = `http://localhost:8000/FlameTuneLibrary/canciones/search/${texto}`;
      let data = url
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json');

      let requestOptions = new RequestOptions({
        method: RequestMethod.Get,
        url: url,
        headers: headers,
        body: data
      });
      return this.http.get(url,{observe:'response'})
    }

    ngOnInit() {
    }
}
