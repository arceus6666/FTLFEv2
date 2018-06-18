import { Component, OnInit } from '@angular/core';
import { MostrarUsuarioService } from './mostrar-usuario.service';
import { GlobalService } from '../global.service'

@Component({
  selector: 'app-mostrar-usuario',
  templateUrl: './mostrar-usuario.component.html',
  styleUrls: ['./mostrar-usuario.component.css']
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
