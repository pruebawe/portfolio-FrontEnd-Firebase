import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/models/proyecto';
import { ImageService } from 'src/app/service/image.service';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {
proyecto: Proyecto = null;

  constructor(private sProyecto: ProyectoService, private activatedRouter: ActivatedRoute, private router:Router, public imageService: ImageService) { }

  ngOnInit(): void {
    const id= this.activatedRouter.snapshot.params['id'];
    this.imageService.clearUrl();
    this.sProyecto.detail(id).subscribe(
      data => {
        this.proyecto = data;
      }, err => {
        alert("Error al modificar el proyecto");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate():void {
    const id= this.activatedRouter.snapshot.params['id'];
    this.proyecto.imgProy = this.imageService.url;
    this.sProyecto.update(id, this.proyecto).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar el proyecto");
        this.router.navigate(['']);
      }
    )
  }

  uploadImage($event:any){
    const name = "img_proyecto"
    this.imageService.uploadImage($event, name);
  }

}
