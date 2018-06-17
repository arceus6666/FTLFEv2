import { Injectable } from '@angular/core';
import {Headers, Http, RequestMethod, RequestOptions} from '@angular/http';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from "rxjs/internal/Observable";

var ide = null;
var user_name = null;

@Injectable()
export class GlobalService {

  constructor(
    private http: Http) {}

  saveLog(id) {
    ide = id
  }

  getLog() {
    return ide;
  }

  clear(){
    ide = null;
  }


}
