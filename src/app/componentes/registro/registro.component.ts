import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/clases/usuario';
import { AuthService } from 'src/app/servicios/auth.service';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { AlertMaterialService } from 'src/app/servicios/alert-material.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  profileForm;
  usuario:Usuario = new Usuario();
  constructor(
    public auth:AuthService,
    public router:Router,
    public usuariosService:UsuariosService,
    private fb:FormBuilder,
    private alert:AlertMaterialService
  ) { }

  ngOnInit(): void {
    this.usuario.tipo = "PROFESOR";
    this.profileForm = this.fb.group({
      correo:["",Validators.compose([Validators.maxLength(40),Validators.required,Validators.email])],
      clave:["",Validators.compose([Validators.minLength(6),Validators.required])]
    })
  }

  
  Registrar()
  {
    this.auth.CrearUsuario(this.usuario)
    .then(()=>{
      //CREAR AVISO DE REGISTRO EXITOSO
      this.alert.openDialog("Operacion exitosa","Se ha creado un nuevo usuario");
      this.usuariosService.CrearUsuario(this.usuario);
      this.router.navigateByUrl('/login');
    })
    .catch(error=>{
      //CREAR AVISO DE ERROR DE REGISTRO
      console.log(error);
      this.alert.openDialog("Error","No se ha podido crear el usuario.");
    });
  }
}
