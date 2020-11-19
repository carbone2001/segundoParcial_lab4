import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
@Component({
  selector: 'app-listado-profesores',
  templateUrl: './listado-profesores.component.html',
  styleUrls: ['./listado-profesores.component.css']
})
export class ListadoProfesoresComponent implements OnInit {

  @Output() OnElegirProfesor = new EventEmitter<any>();
  displayedColumns: string[] = ['correo','elegir'];
  dataSource;
  constructor(
    public usuariosService:UsuariosService
    ) { }

  ngOnInit(): void {
    this.usuariosService.ObtenerProfesores().valueChanges().subscribe((data)=>{
      console.log("datos",data);
      this.dataSource = data;
    });
  }

  ElegirProfesor(element)
  {
    this.OnElegirProfesor.emit(element.correo);
  }
}
