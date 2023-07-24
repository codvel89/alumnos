import { Injectable } from '@angular/core';
import { Alumno } from '../models/alumno.model';



@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  private alumnos: Alumno[] = [];

  constructor() { }

  getAlumnos() {
    return this.alumnos;
  }

  addAlumno(alumno: Alumno)
  {
    this.alumnos.push(alumno);
  }

  removeAlumno(alumno: Alumno)
  {
    this.alumnos = this.alumnos.filter(x => x !== alumno);
  }

}
