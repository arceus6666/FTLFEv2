import { Component, OnInit } from '@angular/core';
import { EditarUsuarioService } from './editar_usuario.service';
import { GlobalService } from '../global.service'

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {
  data_id:any;
  data_correo:any;
  data_password:any;
  data_nombre_usr:any;
  data_url_foto_usr:any;
  data_cantidad_membresias:any;
  data_fecha_inicio_membresia:any;
  data_numero_tarjeta:any;
  imageUrl: string = "";
  fileToUpload: File = null;
  constructor(private serviciod : EditarUsuarioService,
  private global: GlobalService) { }
  update(event) {

    event.preventDefault();
    var newUsuario={
      "id":this.global.getID(),
      "correo":this.data_correo,
      "password":this.data_password,
      "nombre_usr":this.data_nombre_usr,
      "url_foto_usr":this.data_url_foto_usr,
      "cantidad_membresias":null,
      "fecha_inicio_membresia":null,
      "numero_tarjeta":null
    }
    this.serviciod.editarUsuario(this.global.getID(), newUsuario);
    //this.cargar()
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }
  ngOnInit() {
  }

}
