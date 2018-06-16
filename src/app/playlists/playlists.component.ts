import { Component, OnInit } from '@angular/core';
import {PlaylistsService} from './playlists.service';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css']
})
export class PlaylistsComponent implements OnInit {

  data_id:any;
  data_id_playlist:any;
  data_nombre_playlist:any;
  data_nomli1:any;
  data_nomli2:any;
  data_nomli3:any;
  data_tipo_acceso_playlist: any;
  data_nomlinew:any;

  constructor(private serviciod: PlaylistsService) { }

  save(event) {
    event.preventDefault();

    var newList={
      "id_playlist":this.data_id_playlist,
      "nombre_playlist": this.data_nombre_playlist,
      "tipo_acceso_playlist": this.data_tipo_acceso_playlist
    } 

    this.serviciod.crearPlaylist(this.data_id, newList);
  }

  delete(event) {
    event.preventDefault();

    var newList={
      "id_playlist":this.data_id_playlist,
  
    }

    this.serviciod.borrarPlaylist(this.data_id_playlist);
  }
  update(event) {
    event.preventDefault();

    var newList={
      "id_playlist":this.data_id,
      "nombre_playlist": this.data_nombre_playlist,
      "tipo_acceso_playlist": this.data_tipo_acceso_playlist
    }
    this.serviciod.updatePlaylist(this.data_id, newList)
  }


  ngOnInit() {
  }

}

