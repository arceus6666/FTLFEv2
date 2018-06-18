import { Component, OnInit } from '@angular/core';
import { MostrarCancionService } from './mostrar-cancion.service';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-mostrar-cancion',
  template: `<div class="login">
  <h1 class="wel">Cancion</h1>
  <input type="button" value="obtener" class="btn btn-primary btn-block" (click)="get()" />
  <br>  Cancion  <br>
  <br>Id Cancion : {{dataTest.id_cancion}}
  <br>Nombre Cancion: {{dataTest.nombre_cancion}}
  <br>Genero:  {{dataTest.genero}}
  <br>Artista:  {{dataTest.artista}}
  <br>Album:  {{dataTest.album}}
  <br>Año Cancion:  {{dataTest.anio_cancion}}
  <br>Ranking Personal:  {{dataTest.ranking_personal}}
  <br>URL Cancion:  {{dataTest.url_cancion}}
</div>`
})
export class MostrarCancionComponent implements OnInit {
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
  constructor(private serviciod: MostrarCancionService, private global: GlobalService){}

  get() {
    this.serviciod.getCancion(this.global.getSongId()).subscribe(
      res => {
        console.log(res);
        console.log('data response body'+ res['_body']);
        this.dataTest = JSON.parse(res['_body']);
        console.log('body '+this.dataTest);
      }
    );
  }


  ngOnInit() {
  }


}
