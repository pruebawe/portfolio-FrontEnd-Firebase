import { Component, OnInit } from '@angular/core';
import { Habilidades } from 'src/app/models/habilidades';
import { HabilidadService } from 'src/app/service/habilidad.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  habilidad: Habilidades[] = [];

  constructor(private habilidadS: HabilidadService, private tokenService: TokenService) { }

  isLogged= false;

  ngOnInit(): void {
    this.cargarHabilidades();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else{
      this.isLogged = false;
    }
  }

  cargarHabilidades():void{
    this.habilidadS.lista().subscribe(
      data => {
        this.habilidad = data;
      }
    )
  }

  delete(id:number){
    if(id != undefined){
      this.habilidadS.delete(id).subscribe(
        data => {
          this.cargarHabilidades();
        }, err => {
          alert("No se pudo borrar la habilidad");
        }
      )
    }
  }
}
