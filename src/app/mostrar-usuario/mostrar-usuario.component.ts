import { Component, OnInit } from '@angular/core';
import { MostrarUsuarioService } from './mostrar-usuario.service';

@Component({
  selector: 'app-mostrar-usuario',
  template: `<div class="login">
  <h1>MyProfile</h1>
  name<input type="text" [(ngModel)]="data_id" name="u" placeholder="id" required="required" />
  <input type="button" value="obtener" class="btn btn-primary btn-block" (click)="get($event, this.data_id)" />
  <br>  Usuario  <br>
    <br>UserPicture:  <img src="{{dataTest.url_foto_usr}}">
  <br>Id : {{dataTest.id}}
  <br>Correo: {{dataTest.correo}}
  <br>Password:  {{dataTest.password}}
  <br>Nombre:  {{dataTest.nombre_usr}}
  <br>Cantidad Membresias:  {{dataTest.cantidad_membresias}}
  <br>Fecha Inicio Membresias:  {{dataTest.fecha_inicio_membresia}}
  <br>Numero Tarjeta:  {{dataTest.numero_tarjeta}}
  <br><br><button class="button"><a class="colorwhite" routerLink="/editar_usuario">Editar</a></button>
</div>`

})
export class MostrarUsuarioComponent implements OnInit {

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
  constructor(private serviciod: MostrarUsuarioService)
  {
  }

  cx = 'ss';
  get(event, id) {
    this.serviciod.getUsuario(id).subscribe(
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
