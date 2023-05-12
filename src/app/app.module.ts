import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';
import { SeccionUnoComponent } from './seccion-uno/seccion-uno.component';
import { SeccionDosComponent } from './seccion-dos/seccion-dos.component';
import { SeccionTresComponent } from './seccion-tres/seccion-tres.component';
import { SkillComponent } from './skill/skill.component';
import { EdicionComponent } from './edicion/edicion.component';
import { UsuarioService } from './Servicio/usuario.service';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { NuevoPortfolioComponent } from './nuevo-portfolio/nuevo-portfolio.component';



@NgModule({
  declarations: [
    AppComponent,
    BarraSuperiorComponent,
    SeccionUnoComponent,
    SeccionDosComponent,
    SeccionTresComponent,
    SkillComponent,
    EdicionComponent,
    AuthFormComponent,
    NuevoPortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ 
    
    [UsuarioService],
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
