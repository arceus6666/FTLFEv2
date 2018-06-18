import { Injectable } from '@angular/core';
import {Headers, Http, RequestMethod, RequestOptions} from '@angular/http';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from "rxjs/internal/Observable";

@Injectable()
export class IniciarSesionService {

  constructor(
    private http: Http) {}

  iniciarSesion(log): Observable<HttpResponse<any>> {
    console.log('iniciarSesion called pre url')
    let url = `http://localhost:8000/FlameTuneLibrary/usuarios/login`;
    let data = log;
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    //aders.append('Access-Control-Allow-Origin', '*');
    //headers.append('Access-Control-Allow-Headers','Content-Type');
    //headers.append('Access-Control-Allow-Methods',' GET, POST, OPTIONS');
    let requestOptions = new RequestOptions({
      method: RequestMethod.Post,
      url: url,
      headers: headers,
      body: data
    });
    return this.http.post(url,data,{observe:'response'}/*requestOptions*/);
  }

  ngOnInit(){
  }
      
   
}