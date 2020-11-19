import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Materia } from '../clases/materia';
import { AlertMaterialService } from './alert-material.service';

@Injectable({
  providedIn: 'root'
})
export class MateriaService {

  constructor(
    public afs:AngularFirestore,
    public alert:AlertMaterialService
  ) { }

  CrearMateria(materia:Materia)
  {
    try {
      materia.id = this.afs.createId();
      return this.afs.collection('materias').doc(materia.id).set({
        nombre:materia.nombre,
        cuatrimestre:materia.cuatrimestre,
        cupo:materia.cupo,
        anio:materia.anio,
        profesor:materia.profesor,
        id:materia.id,
      })
      /*.then(()=>{
        console.log('Se ha creado la materia en Firestore');
        this.alert.openDialog('Operacion exitosa','La materia se ha creado exitosamente');
      })
      .catch((error)=>{
        this.alert.openDialog('Error','Error al crear usuario en firestore');
        console.log(error);
      });*/
    } catch (error) {
      console.log("Error en crearUsuario. usuarioService",error);
    }
  } 

  ObtenerTodasLasMaterias(){
    return this.afs.collection('materias');
  }

   ObtenerMateria(materia:Materia){
    return this.afs.collection('materias',
      ref => ref.where("nombre","==",materia.nombre)
    );
  }

  ObtenerMateriaPorProfesor(nombreProfesor){
    return this.afs.collection('materias',
      ref => ref.where("profesor","==",nombreProfesor)
    );
  }

  AgregarInscriptoMateria(materia:Materia)
  {
    this.afs.collection('materias').doc(materia.id).set({
      nombre:materia.nombre,
      cuatrimestre:materia.cuatrimestre,
      cupo:(parseInt(materia.cupo)-1),
      anio:materia.anio,
      profesor:materia.profesor,
      id:materia.id
    })
  }
}
