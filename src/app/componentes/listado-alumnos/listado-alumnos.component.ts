import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
@Component({
  selector: 'app-listado-alumnos',
  templateUrl: './listado-alumnos.component.html',
  styleUrls: ['./listado-alumnos.component.css']
})
export class ListadoAlumnosComponent implements OnInit {
  @Output() OnElegir = new EventEmitter<any>();
  displayedColumns: string[] = ['correo','elegir'];
  dataSource;
  constructor(
    public usuariosService:UsuariosService
    ) { }

  ngOnInit(): void {
    this.usuariosService.ObtenerAlumnos().valueChanges().subscribe((data)=>{
      console.log("datos",data);
      this.dataSource = data;
    });
  }

  ElegirAlumno(element)
  {
    this.OnElegir.emit(element);
  }
}
