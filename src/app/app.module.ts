import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { AlumnoComponent } from './components/alumno/alumno.component';
import { AlumnosService } from './services/alumnos.service';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    AlumnoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AlumnosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
