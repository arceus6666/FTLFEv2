import { Injectable } from '@angular/core';
import { Headers, Http, RequestMethod, RequestOptions } from '@angular/http';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from "rxjs/internal/Observable";
import { GlobalService } from './global.service';

@Injectable()
export class LogoutService {

  constructor(
    private http: Http,private global: GlobalService) {}

  cerrarSesion(name) {
    console.log('cerrarSesion called de: '+name)
    let url = `http://localhost:8000/FlameTuneLibrary/usuarios/logout/${name}`;
    let data = url;
    console.log(url)
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    
    let requestOptions = new RequestOptions({
      method: RequestMethod.Put,
      url: url,
      headers: headers,
      body: data
    });
    return this.http.put(url,requestOptions);
  }

  ngOnInit(){
  }
}
