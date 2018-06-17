import { Component, OnInit } from '@angular/core';
import { MostrarCancionService } from './mostrar-cancion.service';

@Component({
  selector: 'app-mostrar-cancion',
  template: `<div class="login">
  <h1>Cancion</h1>
  ID<input type="text" [(ngModel)]="data_id_cancion" name="u" placeholder="id_cancion" required="required" />
  <input type="button" value="obtener" class="btn btn-primary btn-block" (click)="get($event, this.data_id_cancion)" />
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
  constructor(private serviciod: MostrarCancionService)
  {
  }

  cx = 'ss';
  get(event, id_cancion) {
    this.serviciod.getCancion(id_cancion).subscribe(
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
