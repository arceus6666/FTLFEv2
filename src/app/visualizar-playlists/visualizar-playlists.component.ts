import { Component, OnInit } from '@angular/core';
import { VisualizacionPlaylistsService } from './visualizar-playlists.service';
import {GlobalService} from "../global.service";

@Component({
  selector: 'app-visualizar-playlists',
  templateUrl: './visualizar-playlists.component.html'
//  styleUrls: ['./visualizacion-resultados.component.css']
})

export class VisualizacionPlaylistsComponent implements OnInit {
  data_texto:any;
  data_id_cancion:any;
  data_nombre_cancion:any;
  data_genero:any;
  data_artista:any;
  data_album:any;
  data_anio_cancion:any;
  data_ranking_personal:any;
  data_url_cancion:any;
  CancionData:any=[];
  dataTest:any=[];
  constructor(private serviciod: VisualizacionPlaylistsService, private global: GlobalService)
  {
  }

  cx = 'ss';
  get(event) {
    this.serviciod.getPlaylists(this.global.getID()).subscribe(
      res => {
        console.log(res);
        console.log('data response body'+ res['_body']);
        this.dataTest = JSON.parse(res['_body']);
        console.log('body '+this.dataTest);
      }
    );
  }

  save(i){
    this.global.setPlId(this.dataTest[i].id_playlist)
  }


  delete(event,id_playlist) {
    event.preventDefault();
    this.serviciod.deletePlaylist(id_playlist);
  }


  ngOnInit() {
  }


}

