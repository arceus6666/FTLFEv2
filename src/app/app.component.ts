import { Component } from '@angular/core';
import { GlobalService } from './global.service';
import { LogoutService } from './logout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private global: GlobalService, private close: LogoutService){}
  title = 'app';
  clear(){
    console.log('name:'+this.global.getName())
    this.close.cerrarSesion(this.global.getName());
    this.global.clear();
    console.log(this.global.getID());
  }
  getLogged(){
    return this.global.getlog()
  }
}
