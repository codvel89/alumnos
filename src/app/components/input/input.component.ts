import { Component } from '@angular/core';
import { Alumno } from 'src/app/models/alumno.model';
import { AlumnosService } from 'src/app/services/alumnos.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html'
})
export class InputComponent {


  
  
  alumno : Alumno = { name : '', age : 18};
  
  
  constructor(private _alumnosServices : AlumnosService ){}

  
  changeName(txtname: HTMLInputElement) {
    this.alumno.name = txtname.value;  
  }

  changeAge(txtage: HTMLInputElement){
    this.alumno.age = +txtage.value;  
  }

  guardarAlumno(txtname: HTMLInputElement, txtage: HTMLInputElement) {
    this._alumnosServices.addAlumno(this.alumno);
    this.alumno = { name : '', age : 18};
    txtname.value = '';
    txtage.value = '18';
  }




}
