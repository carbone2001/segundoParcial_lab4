import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MateriaService } from 'src/app/servicios/materia.service';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
@Component({
  selector: 'app-listado-materias',
  templateUrl: './listado-materias.component.html',
  styleUrls: ['./listado-materias.component.css']
})
export class ListadoMateriasComponent implements OnInit {

  @Output() OnElegir = new EventEmitter<any>();
  displayedColumns: string[] = ['nombre','cupo','elegir'];
  dataSource;
  constructor(
    public materiasService:MateriaService
    ) { }

  ngOnInit(): void {
    this.materiasService.ObtenerTodasLasMaterias().valueChanges().subscribe((data)=>{
      console.log("datos",data);
      this.dataSource = data;
    });
  }

  ElegirMateria(element)
  {
    this.OnElegir.emit(element);
  }

}
