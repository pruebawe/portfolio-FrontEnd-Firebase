import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidades } from 'src/app/models/habilidades';
import { HabilidadService } from 'src/app/service/habilidad.service';

@Component({
  selector: 'app-edit-habilidad',
  templateUrl: './edit-habilidad.component.html',
  styleUrls: ['./edit-habilidad.component.css']
})
export class EditHabilidadComponent implements OnInit {
 habilidad: Habilidades = null;
 
  constructor(private habilidadS: HabilidadService, private activatedRouter:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    const id= this.activatedRouter.snapshot.params['id'];
    this.habilidadS.details(id).subscribe(
      data => {
        this.habilidad = data;
      }, err => {
        alert("Error al modificar habilidad");
        this.router.navigate(['']);
      }
    )
  }


  onUpdate(){
    const id= this.activatedRouter.snapshot.params['id'];
    this.habilidadS.update(id, this.habilidad).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar habilidad");
        this.router.navigate(['']);
      }
    )
  }
}
