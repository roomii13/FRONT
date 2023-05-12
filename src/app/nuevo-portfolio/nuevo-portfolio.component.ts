import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './../Modelo/usuario';
import { UsuarioService } from '../Servicio/usuario.service';

@Component({
  selector: 'app-nuevo-portfolio',
  templateUrl: './nuevo-portfolio.component.html',
  styleUrls: ['./nuevo-portfolio.component.css']
})
export class NuevoPortfolioComponent implements OnInit {

    usuario: Usuario = { id: 0, nombreCompleto: '', nombre: '', email: '', contraseña: '', apellido: '', titulo: '', fotoPerfil: '', linkedin: '', twiter: '', urlcv: '', descripcion: '' };

   /*probando para ver si toma el usuario
   usuario: Usuario = {
    id: 1,
    nombreCompleto: 'Nombre Apellido',
    nombre: 'Nombre',
    email: 'correo@example.com',
    contraseña: '********',
    apellido: 'Apellido',
    titulo: 'Título',
    fotoPerfil: 'ruta/foto.png',
    linkedin: 'linkedin.com/usuario',
    twiter: 'twitter.com/usuario',
    urlcv: 'ruta/cv.pdf',
    descripcion: 'Descripción del usuario'
  };*/
  constructor(

    private router: Router,
    private usuarioService: UsuarioService
  ) {}

  volverAlAppRoot() {
    this.router.navigate(['/']); // Redirige al app-root
  }

  ngOnInit() {
    this.usuarioService.obtenerUsuario().subscribe((data: Usuario) => {
      this.usuario = data;
      console.log(this.usuario); // Verificar los datos en la consola
    });
   
  }
}




