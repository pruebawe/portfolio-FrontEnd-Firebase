import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { StudyComponent } from './components/study/study.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { interceptorProvider } from "./service/interceptor-service";
import { NewExperienciaComponent } from './crud/new-experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './crud/edit-experiencia/edit-experiencia.component';
import { NewEducacionComponent } from './crud/new-educacion/new-educacion.component';
import { EditEducacionComponent } from './crud/edit-educacion/edit-educacion.component';
import { NewHabilidadComponent } from './crud/new-habilidad/new-habilidad.component';
import { EditHabilidadComponent } from './crud/edit-habilidad/edit-habilidad.component';
import { EditAcercadeComponent } from './crud/edit-acercade/edit-acercade.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { EditBannerComponent } from './crud/edit-banner/edit-banner.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    AboutmeComponent,
    ExperienceComponent,
    StudyComponent,
    SkillsComponent,
    ProjectsComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NewEducacionComponent,
    EditEducacionComponent,
    NewHabilidadComponent,
    EditHabilidadComponent,
    EditAcercadeComponent,
    EditBannerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({}),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
    
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
