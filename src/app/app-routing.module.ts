
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillComponent } from './skill/skill.component';
import { EdicionComponent } from './edicion/edicion.component';
import { NuevoPortfolioComponent } from './nuevo-portfolio/nuevo-portfolio.component';




const routes: Routes = [
  {path:'app-skill', component:SkillComponent},
  { path: 'edicion', component: EdicionComponent },
  {path:'nuevoPortfolio', component:NuevoPortfolioComponent},
  //{ path: '',   redirectTo: 'app-root', pathMatch: 'full' }//
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
