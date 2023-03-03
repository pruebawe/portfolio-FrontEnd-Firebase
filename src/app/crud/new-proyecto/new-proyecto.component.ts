import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/models/proyecto';
import { ImageService } from 'src/app/service/image.service';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {
 nombre: string = '';
 fecha: string = '';
 descripcion: string = '';
 imgProy: string = '';
 url: string = '';

  constructor(private sProyecto: ProyectoService, private router:Router, public imageService: ImageService) { }

  ngOnInit(): void {
  }

  onCreate():void {
    this.imgProy = this.imageService.url;
    const proyecto = new Proyecto(this.nombre, this.fecha, this.descripcion, this.imgProy, this.url);
    this.sProyecto.save(proyecto).subscribe(
      data => {
        alert("Proyecto agregado");
        this.router.navigate(['']);
      }, error => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

  uploadImage($event:any) {
    const name = "img_proyecto"
    this.imageService.uploadImage($event, name);
  }
}
