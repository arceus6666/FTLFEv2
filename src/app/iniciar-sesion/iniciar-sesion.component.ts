import { Component, OnInit } from '@angular/core';
import { IniciarSesionService } from './iniciar_sesion.service';
import { GlobalService } from '../global.service';
import { MostrarUsuarioComponent} from '../mostrar-usuario/mostrar-usuario.component'


@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
  data_nombre_usr:any;
  data_password:any;
  dataTest:any=[];
  constructor(private serviciod: IniciarSesionService,
    private global: GlobalService
    //, private mostrar: MostrarUsuarioComponent
  ) { }

  iniciar(event, nombre_usr, pass_usr) {
    //this.global.saveLog(this.serviciod.iniciarSesion(log));
    //this.serviciod.iniciarSesion(log)
    var log = {
      name:nombre_usr,
      password:pass_usr
    }
    //console.log(this.serviciod.iniciarSesion(log))
    this.serviciod.iniciarSesion(log).subscribe(
      res => {
        console.log(res);
        console.log('received: ' + res['_body']);
        this.dataTest = JSON.parse(res['_body']);
        console.log('body: ' + this.dataTest+".");
        //console.log('id?: ' + this.dataTest.id)
        this.global.saveLog(this.dataTest.id,this.dataTest.mail,
          this.dataTest.pass,this.dataTest.name,this.dataTest.url,
          this.dataTest.cantidad,this.dataTest.fecha,
          this.dataTest.numero,this.dataTest.logged2);
      }
    );

    this.global.saveLog(this.dataTest.id);

  }

  ngOnInit() {
  }

}
