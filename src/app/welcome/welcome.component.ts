import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  template: '<body class="welc">' +
  '\n' +
  '<div class="centerme">\n' +
  '    <h1 class="wel"><br>Burn the World with<br>your favorite Jams!!!</h1>' +
  '    <img src="http://i1278.photobucket.com/albums/y518/TaurineSGH/FlameTuneLibrary/Logo_zpsx5ti8awt.png" class="centerme logo"><br>' +
  '    <button class="button buttonwel disabled colorwhite">Membresias</button>\n' +
  '    <button class="button buttonwel"><a class="colorwhite" routerLink="/registrarse">Registrarse</a></button>\n' +
  '<h4 class="wel">Just by joining you can be 20% cooler!<br><br><br><br><br></h4>' +
  '</div>' +
  '</body>'
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
