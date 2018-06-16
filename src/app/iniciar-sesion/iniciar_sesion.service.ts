import { Injectable } from '@angular/core';
import {Headers, Http, RequestMethod, RequestOptions} from '@angular/http';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from "rxjs/internal/Observable";

@Injectable()
export class IniciarSesionService {

  constructor(
    private http: Http) {}

  iniciarSesion(log) {
    let url = `http://localhost:8000/FlameTuneLibrary/usuarios/login/${log.name}/${log.pass}`;
    let data = url
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    let requestOptions = new RequestOptions({
      method: RequestMethod.Post,
      url: url,
      headers: headers,
      body: data
    });
    return this.http.post(url,data,requestOptions).forEach(res => res.json());
  }
      
   
}