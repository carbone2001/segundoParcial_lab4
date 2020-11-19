import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Output() opcion = new EventEmitter<any>();
  constructor(
    public auth:AuthService,
    public router:Router
  ) { }
  opciones = {
    altaAdmin: false,
    altaMateria: false,
    inscripcionAdmin: false, //Listado de materias y listado de alumnos para inscribir 
    listadoMaterias: false, //Listado de materias
    listadoUsuarios: false, //Listado de usuarios por tipo
    inscripcionAlumno: false,
    listadoInscripcionesAlumno: false,//MAterias en la que esta inscvripto el alumno
    materiasCargoProfesor: false,//MAterias a cargo del progfesor
    alumnosMateriaCargoProfesor: false //Alumnos incriptos en la materia que dicta
  }

  

  ngOnInit(): void {
    this.opcion.emit(this.opciones);
  }

  Opcion(opcion) {
    switch (opcion) {
      case 'altaAdmin':
        this.router.navigateByUrl('/altaAdmin');
        /*this.QuitarTodasLasOpciones();
        this.opciones.altaAdmin = true;
        this.opcion.emit(this.opciones);*/
        break;
      case 'altaMateria':
        this.router.navigateByUrl('/altaMateria');
        /*this.QuitarTodasLasOpciones();
        this.opciones.altaMateria = true;
        this.opcion.emit(this.opciones);*/
        break;
      case 'inscripcionAdmin':
        this.router.navigateByUrl('/inscripcionAdmin');
        /*this.QuitarTodasLasOpciones();
        this.opciones.inscripcionAdmin = true;
        this.opcion.emit(this.opciones);*/
        break;
      case 'listadoMaterias':
        this.router.navigateByUrl('/listadoMaterias');
        /*this.QuitarTodasLasOpciones();
        this.opciones.listadoMaterias = true;
        this.opcion.emit(this.opciones);*/
        break;
      case 'listadoUsuarios':
        this.router.navigateByUrl('/listadoUsuarios');
        /*this.QuitarTodasLasOpciones();
        this.opciones.listadoUsuarios = true;
        this.opcion.emit(this.opciones);*/
        break;
      case 'inscripcionAlumno':
        this.QuitarTodasLasOpciones();
        this.opciones.inscripcionAlumno = true;
        this.opcion.emit(this.opciones);
        break;
      case 'listadoInscripcionesAlumno':
        this.QuitarTodasLasOpciones();
        this.opciones.listadoInscripcionesAlumno = true;
        this.opcion.emit(this.opciones);
        break;
      case 'materiasCargoProfesor':
        this.QuitarTodasLasOpciones();
        this.opciones.materiasCargoProfesor = true;
        this.opcion.emit(this.opciones);
        break;
      case 'alumnosMateriaCargoProfesor':
        this.QuitarTodasLasOpciones();
        this.opciones.alumnosMateriaCargoProfesor = true;
        this.opcion.emit(this.opciones);
        break;
    }
  }

  QuitarTodasLasOpciones() {
    this.opciones = {
      altaAdmin: false,
      altaMateria: false,
      inscripcionAdmin: false, //Listado de materias y listado de alumnos para inscribir 
      listadoMaterias: false, //Listado de materias
      listadoUsuarios: false, //Listado de usuarios por tipo
      inscripcionAlumno: false,
      listadoInscripcionesAlumno: false,//MAterias en la que esta inscvripto el alumno
      materiasCargoProfesor: false,//MAterias a cargo del progfesor
      alumnosMateriaCargoProfesor: false //Alumnos incriptos en la materia que dicta
    }
  }

}
