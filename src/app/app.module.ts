import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { FormsModule} from '@angular/forms';
import { BaseRequestOptions, HttpModule, RequestOptions, Headers} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { MostrarUsuarioComponent } from './mostrar-usuario/mostrar-usuario.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { RegistrarseService } from './registrarse/registrarse.service';
import { EditarUsuarioService } from './editar-usuario/editar_usuario.service';
import { MostrarUsuarioService } from './mostrar-usuario/mostrar-usuario.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { PlaylistsService } from './playlists/playlists.service';
import { IniciarSesionService } from './iniciar-sesion/iniciar_sesion.service';
import { AgregarTarjetaComponent } from './agregar-tarjeta/agregar-tarjeta.component';
import { VisualizacionResultadosComponent } from './visualizacion-resultados/visualizacion-resultados.component';
import { MostrarCancionComponent } from './mostrar-cancion/mostrar-cancion.component';
import { VisualizacionResultadosService } from './visualizacion-resultados/visualizacion-resultados.service';
import { MostrarCancionService } from './mostrar-cancion/mostrar-cancion.service';
import { AgregarTarjetaService } from './agregar-tarjeta/agregar-tarjeta.service';
import { GlobalService }from './global.service';
import { ComprarMembresiasComponent } from './comprar-membresias/comprar-membresias.component'
import { ComprarMembresiaService } from './comprar-membresias/comprar-membresias.service';
import { LogoutService } from './logout.service';
import { MembresiasComponent } from './membresias/membresias.component';
import { VisualizacionPlaylistsComponent } from './visualizar-playlists/visualizar-playlists.component';
import {VisualizacionPlaylistsService} from "./visualizar-playlists/visualizar-playlists.service";
import { EditPlaylistComponent } from './edit-playlist/edit-playlist.component';
import {EditPlaylistService} from "./edit-playlist/edit-playlist.service";
import { CreatePlaylistComponent } from './create-playlist/create-playlist.component';
import {CreatePlaylistService} from "./create-playlist/create-playlist.service";

@NgModule({
  declarations: [
    AppComponent,
    RegistrarseComponent,
    IniciarSesionComponent,
    MostrarUsuarioComponent,
    EditarUsuarioComponent,
    WelcomeComponent,
    PlaylistsComponent,
    AgregarTarjetaComponent,
    VisualizacionResultadosComponent,
    MostrarCancionComponent,
    ComprarMembresiasComponent,
    MembresiasComponent,
    VisualizacionPlaylistsComponent,
    EditPlaylistComponent,
    CreatePlaylistComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
    {
      path:'registrarse',
      component: RegistrarseComponent
    },
    {
      path:'iniciar_sesion',
      component: IniciarSesionComponent
    },
    {
      path:'mostrar_usuario',
      component: MostrarUsuarioComponent
     },
      {
        path:'welcome',
        component: WelcomeComponent
      },
     {
      path:'editar_usuario',
      component:EditarUsuarioComponent
     },
      {
        path:'playlists',
        component:PlaylistsComponent
      },
      {
        path:'busqueda',
        component: VisualizacionResultadosComponent
      },
      {
        path:'mostrar_cancion',
        component: MostrarCancionComponent
      },
      {
        path:'visualizacion_resultados',
        component:VisualizacionResultadosComponent
      },
      {
        path:'agregar_tarjeta',
        component:AgregarTarjetaComponent
      },
      {
        path:'comprar_membresias',
        component:ComprarMembresiasComponent
      }, {
        path:'membresias',
        component:MembresiasComponent
      }, {
        path:'visualizar_playlists',
        component:VisualizacionPlaylistsComponent
      }, {
        path:'edit_playlist',
        component:EditPlaylistComponent
      }, {
        path:'create_playlist',
        component:CreatePlaylistComponent
      }
    ])
  ],
  providers: [RegistrarseService,EditarUsuarioService,MostrarUsuarioService,PlaylistsService,
    IniciarSesionService,MostrarCancionService,GlobalService,VisualizacionResultadosService,AgregarTarjetaService,
    ComprarMembresiaService,LogoutService,VisualizacionPlaylistsService, EditPlaylistService, CreatePlaylistService],
  bootstrap: [AppComponent]


})
export class AppModule { }
