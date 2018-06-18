import { Injectable } from '@angular/core';
import {Headers, Http, RequestMethod, RequestOptions} from '@angular/http';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from "rxjs/internal/Observable";

@Injectable()
export class VisualizacionPlaylistsService {

  constructor(
    private http: Http) {}

    getPlaylists(id_user): Observable<HttpResponse<any>> {
      let url = `http://localhost:8000/FlameTuneLibrary/playlist/getList/${id_user}`;
      let data = url;
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json');

      let requestOptions = new RequestOptions({
        method: RequestMethod.Get,
        url: url,
        headers: headers,
        body: data
      });
      return this.http.get(url,{observe:'response'});
    }

  deletePlaylist(id_playlist) {
    let url = `http://localhost:8000/FlameTuneLibrary/playlist/delete/${id_playlist}`;
    //  let data = JSON.stringify(newList);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    let requestOptions = new RequestOptions({
      method: RequestMethod.Delete,
      url: url,
      headers: headers,
      //  body: data
    });
    return this.http.delete(url,requestOptions).forEach(res => res.json());
  }

    ngOnInit() {
    }
}
