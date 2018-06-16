import { Injectable } from '@angular/core';
import {Headers, Http, RequestMethod, RequestOptions} from '@angular/http';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from "rxjs/internal/Observable";

@Injectable()
export class RegistrarseService {

  constructor(
    private http: Http) {}

  registrarUsuario(newUsuario) {
    let url = 'http://localhost:8000/FlameTuneLibrary/usuarios/create';
    let data = JSON.stringify(newUsuario);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    let requestOptions = new RequestOptions({
      method: RequestMethod.Post,
      url: url,
      headers: headers,
      body: data
    });

   return this.http.post(url,data,requestOptions).forEach(res => res.json());
  }

}
