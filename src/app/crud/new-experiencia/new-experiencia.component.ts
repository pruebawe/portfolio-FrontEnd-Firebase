import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/models/experiencia';
import { ImageService } from 'src/app/service/image.service';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
 nombreE: string = '';
 descriptionE: string = '';
 imgE: string = '';

  constructor(private sExperiencia: SExperienciaService, private router:Router, public imageService: ImageService) { }

  ngOnInit(): void {
  }

  onCreate():void {
    this.imgE = this.imageService.url;
    const expe = new Experiencia(this.nombreE, this.descriptionE, this.imgE);
    this.sExperiencia.save(expe).subscribe(
      data => {
        alert("Experiencia agregada");
        this.router.navigate(['']);
      }, error => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

  uploadImage($event:any) {
    const name = 'experiencia';
    this.imageService.uploadImage($event, name)
  }

}
