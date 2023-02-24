import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/models/experiencia';
import { ImageService } from 'src/app/service/image.service';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {
  expLab: Experiencia = null;

  constructor(private sExperiencia: SExperienciaService, private activatedRouter: ActivatedRoute, private router:Router, public imageService: ImageService) { }

  ngOnInit(): void {
    const id= this.activatedRouter.snapshot.params['id'];
    this.imageService.clearUrl();
    this.sExperiencia.details(id).subscribe(
      data => {
        this.expLab = data;
      }, err => {
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate():void {
    const id= this.activatedRouter.snapshot.params['id'];
    this.expLab.imgE = this.imageService.url;
    this.sExperiencia.update(id, this.expLab).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      }
    )
  }

  uploadImage($event:any){
    const name = "img_exp"
    this.imageService.uploadImage($event, name);
  }
}
