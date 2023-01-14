import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditExperienciaComponent } from './crud/edit-experiencia/edit-experiencia.component';
import { NewEducacionComponent } from './crud/new-educacion/new-educacion.component';
import { NewExperienciaComponent } from './crud/new-experiencia/new-experiencia.component';
import { EditEducacionComponent } from './crud/edit-educacion/edit-educacion.component'
import { EditHabilidadComponent } from './crud/edit-habilidad/edit-habilidad.component';
import { NewHabilidadComponent } from './crud/new-habilidad/new-habilidad.component';
import { EditAcercadeComponent } from './crud/edit-acercade/edit-acercade.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'nuevaexpe', component: NewExperienciaComponent},
  {path:'editexp/:id', component: EditExperienciaComponent},
  {path:'nuevaedu', component: NewEducacionComponent},
  {path:'editedu/:id', component: EditEducacionComponent},
  {path:'nuevahab', component: NewHabilidadComponent},
  {path:'edithab/:id', component: EditHabilidadComponent},
  {path:'editacercade/:id', component: EditAcercadeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
