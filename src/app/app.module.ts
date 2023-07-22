import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';
import { SeccionUnoComponent } from './seccion-uno/seccion-uno.component';
import { SeccionDosComponent } from './seccion-dos/seccion-dos.component';
import { SeccionTresComponent } from './seccion-tres/seccion-tres.component';
import { SkillComponent } from './skill/skill.component';




@NgModule({
  declarations: [
    AppComponent,
    BarraSuperiorComponent,
    SeccionUnoComponent,
    SeccionDosComponent,
    SeccionTresComponent,
    SkillComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
