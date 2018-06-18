import { Component, OnInit } from '@angular/core';
import {CreatePlaylistService} from "./create-playlist.service";
import {GlobalService} from "../global.service";

@Component({
  selector: 'app-create-playlist',
  templateUrl: './create-playlist.component.html',
  styleUrls: ['./create-playlist.component.css']
})
export class CreatePlaylistComponent implements OnInit {

  data_id:any;
  data_id_playlist:any;
  data_nombre_playlist:any;
  data_nomli1:any;
  data_nomli2:any;
  data_nomli3:any;
  data_tipo_acceso_playlist: any;
  data_nomlinew:any;

  constructor(private serviciod: CreatePlaylistService, private global: GlobalService) { }

  save(event) {
    event.preventDefault();

    var newList={
      "id_playlist":null,
      "nombre_playlist": this.data_nombre_playlist,
      "tipo_acceso_playlist": this.data_tipo_acceso_playlist
    }

    this.serviciod.createPlaylist(this.global.getID(), newList);
  }


  ngOnInit() {
  }

}
