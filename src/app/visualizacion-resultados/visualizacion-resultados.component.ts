import { Component, OnInit } from '@angular/core';
import { VisualizacionResultadosService } from './visualizacion-resultados.service';

@Component({
  selector: 'app-visualizacion-resultados',
  template:`<div class="login">
  <h1>Canciones</h1>
  Buscar<input type="text" [(ngModel)]="data_texto" name="u" placeholder="texto" required="required" />
  <input type="button" value="obtener" class="btn btn-primary btn-block" (click)="get($event, this.data_texto)" />
  <br>  Canciones  <br>
  <table class="table">
  <tr *ngFor="let dataTest of dataTest; let i = index">
  <td>{{i + 1}}</td>
  <td>{{dataTest.id_cancion}}</td> 
  <td>{{dataTest.nombre_cancion}}</td>  
  <td>{{dataTest.genero}}</td> 
  <td>{{dataTest.artista}}</td> 
  <td>{{dataTest.album}} </td> 
  <td>{{dataTest.anio_cancion}}</td>
  <td>{{dataTest.ranking_personal}}</td> 
  <td>{{dataTest.url_cancion}}</td>
  </tr>
  </table>
</div>`
})
export class VisualizacionResultadosComponent implements OnInit {
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
  constructor(private serviciod: VisualizacionResultadosService)
  {
  }

  cx = 'ss';
  get(event, id_cancion) {
    this.serviciod.getBusqueda(id_cancion).subscribe(
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
