import { Injectable } from '@angular/core';
import {Headers, Http, RequestMethod, RequestOptions} from '@angular/http';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from "rxjs/internal/Observable";

@Injectable()
export class MostrarUsuarioService {

  constructor(
    private http: Http) {}

    getUsuario(id): Observable<HttpResponse<any>> {
      let url = `http://localhost:8000/FlameTuneLibrary/usuarios/get/${id}`;
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
      console.log('data: '+data)
      return this.http.get(url,{observe:'response'})
    }

    ngOnInit() {
    }
}
