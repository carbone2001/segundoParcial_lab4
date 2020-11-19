import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public opciones = {
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
  editarMascota;
  constructor() { }

  ngOnInit(): void {
    this.opciones.altaAdmin = true;
  }

  OnOpcionElegida(event){
    console.log(event)
    this.opciones =  event;
  }

  /*EditarMascota(event){
    this.opciones.alta = true;
    this.opciones.mascotas = false;
    this.opciones.turnos = false;
    this.opciones.chat = false;
    this.editarMascota = event;
  }*/
}
