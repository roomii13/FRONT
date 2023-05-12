
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../Servicio/usuario.service';
import { Usuario } from '../Modelo/usuario';
import { Router } from '@angular/router';
import { ContenidoService } from '../Servicio/contenido.service';



@Component({
  selector: 'app-edicion',
  templateUrl:'./edicion.component.html',
  styleUrls: ['./edicion.component.css']
})

export class EdicionComponent  {

  
  
  usuario: Usuario = {
    id: 0,
    nombreCompleto: '',
    nombre: '',
    email: '',
    contraseña: '',
    apellido: '',
    titulo: '',
    fotoPerfil: '',
    linkedin: '',
    twiter: '',
    urlcv: '',
    descripcion: ''

  }; // Inicializador agregado



constructor( private usuarioServicio:UsuarioService,private router: Router,private contenidoService: ContenidoService){}

datosEditados: any = {};
skills: any[] = []; // Arreglo para almacenar los skills agregados





guardarDatos(): void {


  this.usuarioServicio.guardarDatosEditados(this.datosEditados)
      .subscribe(
        (guardadoExitoso: boolean) => {
          if (guardadoExitoso) {
            console.log('Los datos se guardaron correctamente.');
            this.contenidoService.datosEditados = this.datosEditados;
            this.router.navigate(['nuevoPortfolio']);
          } else {
            console.log('Error al guardar los datos.');
          }}
         );

}
agregarSkill(): void {
  const nuevoSkill = {
    nombreSkill: '',
    porcentaje: ''
  };
  this.skills.push(nuevoSkill);
}
eliminarSkill(index: number): void {
  this.skills.splice(index, 1);
}

}
