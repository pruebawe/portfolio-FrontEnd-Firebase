import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {
  nombreE: string;
  descripcionE: string;
  imgE: string;

  constructor(private educacionS: EducacionService, private router: Router, public imageService:ImageService) { }

  ngOnInit(): void {
  }

  onCreate():void{
    this.imgE = this.imageService.url;
    const educacion = new Educacion(this.nombreE, this.descripcionE, this.imgE);
    this.educacionS.save(educacion).subscribe(
      data =>{
        alert("Educacion añadida correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

  uploadImage($event:any) {
    const name = 'educacion';
    this.imageService.uploadImage($event, name)
  }
}
