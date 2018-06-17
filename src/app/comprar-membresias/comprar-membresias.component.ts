import { Component, OnInit } from '@angular/core';
import { ComprarMembresiaService } from './comprar-membresias.service';

@Component({
  selector: 'app-comprar-membresias',
  templateUrl: './comprar-membresias.component.html',
  styleUrls: ['./comprar-membresias.component.css']
})
export class ComprarMembresiasComponent implements OnInit {
  data_id:any;
  data_cantidad_membresias:any;

  constructor(private serviciod : ComprarMembresiaService) { }
  update(event, id) {

    event.preventDefault();
    var cantidad_membresias={
      "cantidad_membresias":this.data_cantidad_membresias,
    }
    this.serviciod.comprarMembresia(this.data_id, this.data_cantidad_membresias);
    //this.cargar()
  }
  
  ngOnInit() {
  }

}
