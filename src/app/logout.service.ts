import { Injectable } from '@angular/core';
import {Headers, Http, RequestMethod, RequestOptions} from '@angular/http';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from "rxjs/internal/Observable";
import { GlobalService } from './global.service';

@Injectable()
export class LogoutService {

  constructor(
    private http: Http,private global: GlobalService) {}

  cerrarSesion(): Observable<HttpResponse<any>> {
    console.log('cerrarSesion called')
    let url = `http://localhost:8000/FlameTuneLibrary/usuarios/logout/${this.global.getName()}`;
    let data = '';
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    //headers.append('Access-Control-Allow-Origin', '*');
    let requestOptions = new RequestOptions({
      method: RequestMethod.Get,
      url: url,
      headers: headers,
      body: data
    });
    return this.http.get(url,{observe:'response'}/*requestOptions*/);
  }

  ngOnInit(){
  }
      
   
}