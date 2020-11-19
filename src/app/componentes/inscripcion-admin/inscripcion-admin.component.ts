import { Component, OnInit } from '@angular/core';
import { AlertMaterialService } from 'src/app/servicios/alert-material.service';
import { MateriaService } from 'src/app/servicios/materia.service';

@Component({
  selector: 'app-inscripcion-admin',
  templateUrl: './inscripcion-admin.component.html',
  styleUrls: ['./inscripcion-admin.component.css']
})
export class InscripcionAdminComponent implements OnInit {

  materia;
  alumno;
  constructor(
    public materiaService:MateriaService,
    public alert:AlertMaterialService
  ) { }

  ngOnInit(): void {
  }

  MateriaElegida(event)
  {
    this.materia = event;
  }

  UsuarioElegido(event)
  {
    this.alumno = event;
  }

  Inscribir()
  {
    this.materiaService.AgregarInscriptoMateria(this.materia);
    this.alert.openDialog("Registro exitoso","Se ha inscripto el usuario exitosamente");
  }



}
