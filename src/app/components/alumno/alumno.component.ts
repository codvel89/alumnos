import { Component } from '@angular/core';
import { Alumno } from 'src/app/models/alumno.model';
import { AlumnosService } from 'src/app/services/alumnos.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html'
})
export class AlumnoComponent {
  
  alumnos : Alumno[] = this._alumnosServices.getAlumnos();
  
  constructor(private _alumnosServices : AlumnosService ){}
  
  removerAlumno(alumno: Alumno) {
    this._alumnosServices.removeAlumno(alumno);
    this.alumnos = this._alumnosServices.getAlumnos();
  }
}
