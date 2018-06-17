import { Component, OnInit } from '@angular/core';
import { IniciarSesionService } from './iniciar_sesion.service';
import { GlobalService } from '../global.service';


@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html'
})
export class IniciarSesionComponent implements OnInit {
  data_nombre_usr:any;
  data_password:any;
  dataTest:any=[];
  constructor(private serviciod: IniciarSesionService, private global: GlobalService) { }

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
        this.dataTest = res['_body'];
        console.log('body: ' + this.dataTest);
      }
    );

    this.global.saveLog(this.dataTest.id);
    
  }

  ngOnInit() {
  }
  
}
