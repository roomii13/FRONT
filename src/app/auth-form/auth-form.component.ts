import { UsuarioService } from './../Servicio/usuario.service';
import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit {

  email: string;
  contrasena: string;


  constructor(private usuarioService: UsuarioService, private router: Router,) {
    this.email="";
    this.contrasena="";
   }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  autenticarUsuario() {

    this.usuarioService.autenticarUsuario(this.email, this.contrasena).subscribe(
      (isAutenticado) => {
        if (isAutenticado) {
          // Si el usuario está autenticado, se redirige a la página
          this.router.navigate(['edicion']);
          console.log('Usuario autenticado exitosamente');
        } else {
          // Si no está autenticado, se muestra un mensaje de error
          console.log('Usuario no autenticado');
        }
      },
      (error) => {
        // Si ocurre un error en la autenticación, se muestra un mensaje de error
        console.log('Error en la autenticación');
      }
    );
  }


}
