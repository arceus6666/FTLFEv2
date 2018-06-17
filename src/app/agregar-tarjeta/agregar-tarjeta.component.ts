import { Component, OnInit } from '@angular/core';
import { AgregarTarjetaService } from './agregar-tarjeta.service';

@Component({
  selector: 'app-agregar-tarjeta',
  templateUrl: './agregar-tarjeta.component.html',
  styleUrls: ['./agregar-tarjeta.component.css']
})
export class AgregarTarjetaComponent implements OnInit {

  constructor(private serviciod: AgregarTarjetaService) { }
  data_id:any;
  data_nro_tarjeta:any;
  data_cvc_tarjeta:any;
  data_fecha_vencimiento_tarjeta:any;
  data_tipo_tarjeta:any;
  data_pais_tarjeta:any;
  data_nombre_usuario_tarjeta:any;
  save(event) {
    event.preventDefault();

    var newTarjeta={
      "nro_tarjeta":this.data_nro_tarjeta,
      "cvc_tarjeta": this.data_cvc_tarjeta,
      "fecha_vencimiento_tarjeta": this.data_fecha_vencimiento_tarjeta,
      "tipo_tarjeta": this.data_tipo_tarjeta,
      "pais_tarjeta": this.data_pais_tarjeta,
      "nombre_usuario_tarjeta": this.data_nombre_usuario_tarjeta
    } 

    this.serviciod.anadirTarjeta(this.data_id, newTarjeta);
  }

  ngOnInit() {
  }

}
