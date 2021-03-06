import { Injectable } from '@angular/core';
import {Headers, Http, RequestMethod, RequestOptions} from '@angular/http';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from "rxjs/internal/Observable";

@Injectable()
export class ComprarMembresiaService {

  constructor(
    private http: Http) {}

  comprarMembresia(id, cantidad_membresias) {
    let url = `http://localhost:8000/FlameTuneLibrary/usuarios/comprarMembresias/${id}/${cantidad_membresias}`;
    let data = JSON.stringify(cantidad_membresias);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    let requestOptions = new RequestOptions({
      method: RequestMethod.Put,
      url: url,
      headers: headers,
      body: data
    });
    return this.http.put(url,data,requestOptions).forEach(res => res.json());
  }
}
