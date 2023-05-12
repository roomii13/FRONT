import { Component } from '@angular/core';
import { UsuarioService } from './Servicio/usuario.service';
import { ContenidoService } from './Servicio/contenido.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PortfolioFront-end';



  constructor(private contenidoService: ContenidoService, private usuarioService:UsuarioService) {}

  /*ngOnInit(): void {
    this.contenidoService.ocultarContenidoEvent.subscribe(() => {
      document.body.classList.add('ocultar-contenido');
    });
  }*/
}

