import { Injectable } from '@angular/core';
import {Headers, Http, RequestMethod, RequestOptions} from '@angular/http';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from "rxjs/internal/Observable";
import { GlobalService } from '../global.service';

@Injectable()
export class VisualizacionResultadosService {

  constructor(
    private http: Http, private global: GlobalService) {}

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
      // TODO 
      // this.global.setSongId();
      return this.http.get(url,{observe:'response'});
    }

    

    ngOnInit() {
    }
}
