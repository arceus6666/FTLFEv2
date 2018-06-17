import { Component, OnInit } from '@angular/core';
import { MostrarUsuarioService } from './mostrar-usuario.service';
import { GlobalService } from '../global.service'

@Component({
  selector: 'app-mostrar-usuario',
  template: `<div class="login">
  <h1>MyProfile</h1>
  <!--name<input type="text" [(ngModel)]="data_id" name="u" placeholder="id" required="required" /-->
  <input type="button" value="obtener" class="btn btn-primary btn-block" (click)="set()" />
  <br>  Usuario  <br>
  <br>Nombre: {{dataTest.nombre_usr}}
  <br>Correo: {{dataTest.correo}}
  <br>UserPicture: <img src="{{dataTest.url_foto_usr}}">
  <br>Cantidad Membresias: {{dataTest.cantidad_membresias}}
  <br>Fecha Inicio Membresias: {{dataTest.fecha_inicio_membresia}}
  <br>Numero Tarjeta: {{dataTest.numero_tarjeta}}
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
  constructor(private serviciod: MostrarUsuarioService,
    private global: GlobalService){}
  cx = 'ss';
  
  
  set() {
    //console.log(this.global.getID())
    this.serviciod.getUsuario(this.global.getID()).subscribe(
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
