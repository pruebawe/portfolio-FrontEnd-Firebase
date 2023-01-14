import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidades } from 'src/app/models/habilidades';
import { HabilidadService } from 'src/app/service/habilidad.service';

@Component({
  selector: 'app-new-habilidad',
  templateUrl: './new-habilidad.component.html',
  styleUrls: ['./new-habilidad.component.css']
})
export class NewHabilidadComponent implements OnInit {
 nombre: string;
 porcentaje:number;

  constructor(private habilidadS: HabilidadService, private router:Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const habilidad = new Habilidades(this.nombre, this.porcentaje);
    this.habilidadS.save(habilidad).subscribe(
      data => {
        alert("habilidad creada correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("falló al añadir la habilidad");
        this.router.navigate(['']);
      }
    )
  }

}
