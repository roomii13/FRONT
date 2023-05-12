import { UsuarioService } from './../Servicio/usuario.service';
import { Component } from '@angular/core';
import { Usuario } from '../Modelo/usuario';

@Component({
  selector: 'app-barra-superior',
  templateUrl: './barra-superior.component.html',
  styleUrls: ['./barra-superior.component.css']
})
export class BarraSuperiorComponent  {
  
 /* public usuario: Usuario;

  constructor(private usuarioService: UsuarioService) {
    this.usuario = this.usuarioService.obtenerUsuario();
  }*/
}
