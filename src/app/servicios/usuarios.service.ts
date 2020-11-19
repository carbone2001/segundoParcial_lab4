import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Usuario } from '../clases/usuario';
import { AlertMaterialService } from './alert-material.service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(
    public afs:AngularFirestore,
    public alert:AlertMaterialService
  ) { }

  CrearUsuario(usuario:Usuario)
  {
    try {
      usuario.id = this.afs.createId();
      this.afs.collection('usuarios').doc(usuario.id).set({
        correo:usuario.correo,
        clave:usuario.clave,
        tipo:usuario.tipo,
        id:usuario.id
      })
      .then(()=>{
        console.log('Se ha creado el usuario en Firestore');
      })
      .catch((error)=>{
        this.alert.openDialog('Error','Error al crear usuario en firestore');
        console.log(error);
      });
    } catch (error) {
      console.log("Error en crearUsuario. usuarioService",error);
    }
  } 

   ObtenerUsuario(usuario:Usuario){
    return this.afs.collection('usuarios',
      ref => ref.where("correo","==",usuario.correo)
    );
  }

  ObtenerProfesores(){
    return this.afs.collection('usuarios',
      ref => ref.where("tipo","==","PROFESOR")
    );
  }

  ObtenerAlumnos(){
    return this.afs.collection('usuarios',
      ref => ref.where("tipo","==","ALUMNO")
    );
  }
}
