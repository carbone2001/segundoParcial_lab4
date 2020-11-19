import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertMaterialService } from 'src/app/servicios/alert-material.service';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { MateriaService } from 'src/app/servicios/materia.service';
import { Materia } from '../../clases/materia';
@Component({
  selector: 'app-alta-materia',
  templateUrl: './alta-materia.component.html',
  styleUrls: ['./alta-materia.component.css']
})
export class AltaMateriaComponent implements OnInit {

  materia:Materia = new Materia()
  profileForm;
  constructor(
    public router:Router,
    public usuariosService:UsuariosService,
    private fb:FormBuilder,
    private alert:AlertMaterialService,
    private materiaService:MateriaService
  ) { }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      nombre:["",Validators.compose([Validators.maxLength(20),Validators.required])],
      cuatrimestre:["",Validators.compose([Validators.max(6),Validators.min(1),Validators.required])],
      cupo:["",Validators.compose([Validators.max(80),Validators.required])],
      anio:["",Validators.compose([Validators.min(2020),Validators.required])],
      profesor:["",Validators.compose([Validators.maxLength(40),Validators.required])],
    });
  }

  
  Registrar()
  {
    this.materiaService.CrearMateria(this.materia)
    .then(()=>{
      console.log('Se ha creado la materia en Firestore');
      this.alert.openDialog('Operacion exitosa','La materia se ha creado exitosamente');
      this.router.navigateByUrl('/home');
    })
    .catch((error)=>{
      this.alert.openDialog('Error','Error al crear usuario en firestore');
      console.log(error);
    });
  }

  ProfesorElegido(event)
  {
    console.log(event);
    this.materia.profesor = event;
  }

}
