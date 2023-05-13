import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Usuario } from '../Modelo/usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  private usuarioActual: Usuario = { id: 0, nombreCompleto: '', nombre: '', email: '', contraseña: '', apellido: '', titulo: '', fotoPerfil: '', linkedin: '', twiter: '', urlcv: '', descripcion: '' };


  private url = 'https://backend-apirest-v0ey.onrender.com';

  constructor(private http: HttpClient,private router: Router) { }


  autenticarUsuario(email: string, contraseña: string): Observable<boolean> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const body = {
      email,
      contraseña
    };
    return this.http.post<boolean>(`${this.url}/autenticar`, body, { headers }) .pipe(
      tap((isAutenticado: boolean) => {
        if (isAutenticado) {
          this.router.navigate(['/edicion']); // Redirige a la ruta '/edicion'
        }
      })
    );

  }


  estaAutenticado(): Observable<boolean> {
    return this.http.get<boolean>(`${this.url}/autenticado`);
  }

  obtenerUsuario(): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.url}/usuario`);
    console.log('Datos del usuario:', this.usuarioActual);
  }

  guardarDatosEditados(usuario: Usuario): Observable<boolean> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<boolean>(`${this.url}/editar`, usuario, { headers });
  }
}
