import { Component, OnInit } from '@angular/core';
import { RegistrarseService } from './registrarse.service';
import { $ } from 'protractor';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {
  data_id:any;
  data_correo:any;
  data_password:any;
  data_nombre_usr:any;
  data_url_foto_usr:any;
  data_cantidad_membresias:any;
  data_fecha_inicio_membresia:any;
  data_numero_tarjeta:any;
  constructor(private serviciod: RegistrarseService) { }


  save(event) {
    event.preventDefault();
    var newUsuario={
      "id":null,
      "correo":this.data_correo,
      "password":this.data_password,
      "nombre_usr":this.data_nombre_usr,
      "url_foto_usr":null,
      "cantidad_membresias":0,
      "fecha_inicio_membresia":null,
      "numero_tarjeta":null
    }
    this.serviciod.registrarUsuario(newUsuario);

  }
  ngOnInit() {
  }

}
