import { Component, OnInit } from '@angular/core';
import { VisualizacionResultadosService } from './visualizacion-resultados.service';

@Component({
  selector: 'app-visualizacion-resultados',
  templateUrl: './visualizacion-resultados.component.html',
  styleUrls: ['./visualizacion-resultados.component.css']
})
export class VisualizacionResultadosComponent implements OnInit {

  data_id:any;
  data_correo:any;
  data_password:any;
  data_nombre_usr:any;
  data_url_foto_usr:any;
  data_cantidad_membresias:any;
  data_fecha_inicio_membresia:any;
  data_numero_tarjeta:any;
  UsuarioData:any=[];
  dataTest:any=[];
  constructor(private serviciod: VisualizacionResultadosService)
  {
  }

  cx = 'ss';
  get(event, texto) {
    this.serviciod.getBusqueda(texto).subscribe(
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
