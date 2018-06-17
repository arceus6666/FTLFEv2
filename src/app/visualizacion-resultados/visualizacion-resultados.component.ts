import { Component, OnInit } from '@angular/core';
import { VisualizacionResultadosService } from './visualizacion-resultados.service';

@Component({
  selector: 'app-visualizacion-resultados',
  templateUrl: './visualizacion-resultados.component.html',
  styleUrls: ['./visualizacion-resultados.component.css']
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
