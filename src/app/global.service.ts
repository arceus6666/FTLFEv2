import { Injectable } from '@angular/core';
import {Headers, Http, RequestMethod, RequestOptions} from '@angular/http';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from "rxjs/internal/Observable";

var id_usuario = null;
var correo_usuario = null;
var password_usuario = null;
var nombre_usuario = null;
var url_foto_usuario = null;
var cantidad_membresias_usuario = null;
var fecha_inicio_membresia_usuario = null;
var numero_tarjeta = null;
var logged = false;

var songId = null;

var playlistId = null;
@Injectable()
export class GlobalService {

  constructor(
    private http: Http) {}

  setSongId(id){
    songId = id;
  }
  getSongId(){
    return songId;
  }
  delSongId(){
    songId = null;
  }

  setPlId(id){
    playlistId = id;
  }

  getPlId(){
    return playlistId;
  }
  delPlId(){
    playlistId=null;
  }

  saveLog(id,mail,pass,name,url,cantidad,fecha,numero,logged2) {
    console.log('saving...')
    console.log('id:'+id)
    console.log('mail:'+mail)
    console.log('pass:'+pass)
    console.log('name:'+name)
    console.log('url:'+url)
    console.log('cantidad:'+cantidad)
    console.log('fecha:'+numero)
    console.log('logged'+logged)
    console.log()
    id_usuario = id
    correo_usuario = mail
    password_usuario = pass
    nombre_usuario = name
    url_foto_usuario = url
    cantidad_membresias_usuario = cantidad
    fecha_inicio_membresia_usuario = fecha
    numero_tarjeta = numero
    logged = logged2
  }

  getID() {
    return id_usuario;
  }

  getCorreo() {
    return correo_usuario;
  }

  getPass() {
    return password_usuario;
  }

  getName() {
    return nombre_usuario;
  }
  
  getUrl() {
    return url_foto_usuario;
  }

  getCantidad() {
    return cantidad_membresias_usuario;
  }

  getFecha() {
    return fecha_inicio_membresia_usuario;
  }

  getNumero(){
    return numero_tarjeta;
  }

  getlog() {
    return logged;
  }


  /*
  
  correo_usuario
  password_usuario
  nombre_usuario
  url_foto_usuario
  cantidad_membresias_usuario
  fecha_inicio_membresia_usuario
  numero_tarjeta
  logged
  */

  clear(){
    id_usuario = null;
    correo_usuario = null;
    password_usuario = null;
    nombre_usuario = null;
    url_foto_usuario = null;
    cantidad_membresias_usuario = null;
    fecha_inicio_membresia_usuario = null;
    numero_tarjeta = null;
    logged = false;
    songId = null;
    playlistId = null;
  }

}
