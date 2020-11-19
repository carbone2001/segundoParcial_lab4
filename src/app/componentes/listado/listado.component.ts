import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  @Output() OnEditar = new EventEmitter<any>();
  displayedColumns: string[] = ['correo'];
  dataSource;
  constructor(
    public usuariosService:UsuariosService
    ) { }

  ngOnInit(): void {
    this.usuariosService.ObtenerProfesores();

  }

  Editar(mascota)
  {
    this.OnEditar.emit(mascota);
  }

}
