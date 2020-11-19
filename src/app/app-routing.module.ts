import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AltaAdminComponent } from './componentes/alta-admin/alta-admin.component';
import { AltaMateriaComponent } from './componentes/alta-materia/alta-materia.component';
import { HomeComponent } from './componentes/home/home.component';
import { InscripcionAdminComponent } from './componentes/inscripcion-admin/inscripcion-admin.component';
import { ListadoMateriasComponent } from './componentes/listado-materias/listado-materias.component';
import { ListadoUsuariosComponent } from './componentes/listado-usuarios/listado-usuarios.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { LoginGuard } from './guards/login.guard';
import { AdminGuard } from './guards/admin.guard';
const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'registro',
    component:RegistroComponent
  },
  {
    path:'home',
    component:HomeComponent,
    canActivate:[LoginGuard]
  },
  {
    path:'altaAdmin',
    component:AltaAdminComponent,
    canActivate:[LoginGuard, AdminGuard]
  },
  {
    path:'altaMateria',
    component:AltaMateriaComponent,
    canActivate:[LoginGuard, AdminGuard]
  },
  {
    path:'inscripcionAdmin',
    component:InscripcionAdminComponent,
    canActivate:[LoginGuard, AdminGuard]
  },
  {
    path:'listadoMaterias',
    component:ListadoMateriasComponent,
    canActivate:[LoginGuard, AdminGuard]
  },
  {
    path:'listadoUsuarios',
    component:ListadoUsuariosComponent,
    canActivate:[LoginGuard, AdminGuard]
  },
  {
    path:'**',
    component:LoginComponent
  },
  {
    path:'',
    component:LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
