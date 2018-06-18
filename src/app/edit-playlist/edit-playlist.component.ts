import { Component, OnInit } from '@angular/core';
import {EditPlaylistService} from "./edit-playlist.service";
import {GlobalService} from '../global.service';

@Component({
  selector: 'app-edit-playlist',
  templateUrl: './edit-playlist.component.html',
//  styleUrls: ['./edit-playlist.component.css']
})
export class EditPlaylistComponent implements OnInit {

  data_id:any;
  data_id_playlist:any;
  data_nombre_playlist:any;
  data_nomli1:any;
  data_nomli2:any;
  data_nomli3:any;
  data_tipo_acceso_playlist: any;
  data_nomlinew:any;

  constructor(private serviciod: EditPlaylistService, private global: GlobalService) { }

  update(event) {
    event.preventDefault();

    var newList={
      "id_playlist":this.global.getPlId(),
      "nombre_playlist": this.data_nombre_playlist,
      "tipo_acceso_playlist": this.data_tipo_acceso_playlist
    }
    this.serviciod.updatePlaylist(this.global.getPlId(), newList)
  }

  ngOnInit() {
  }

}
