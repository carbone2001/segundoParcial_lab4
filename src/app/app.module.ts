import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//MATERIAL
import { MatCardModule } from  '@angular/material/card';
import { MatFormFieldModule } from  '@angular/material/form-field';
import { MatInputModule } from  '@angular/material/input';
import { MatButtonModule } from  '@angular/material/button';
import { MatSelectModule } from  '@angular/material/select';
import { MatToolbarModule } from  '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';

import { RegistroComponent } from './componentes/registro/registro.component';
import { LoginComponent } from './componentes/login/login.component';
import { EmailComponent } from './componentes/email/email.component';
import { AlertMaterialComponent } from './componentes/alert-material/alert-material.component';
import { AltaAdminComponent } from './componentes/alta-admin/alta-admin.component';
import { AltaMateriaComponent } from './componentes/alta-materia/alta-materia.component';
import { ListadoComponent } from './componentes/listado/listado.component';
import { ToolbarComponent } from './componentes/toolbar/toolbar.component';
import { InscripcionMateriaComponent } from './componentes/inscripcion-materia/inscripcion-materia.component';
import { FiltrarTipoPipe } from './pipes/filtrar-tipo.pipe';
import { CondicionNotasPipe } from './pipes/condicion-notas.pipe';
import { HomeComponent } from './componentes/home/home.component';
import { InscripcionAdminComponent } from './componentes/inscripcion-admin/inscripcion-admin.component';
import { ListadoMateriasComponent } from './componentes/listado-materias/listado-materias.component';
import { ListadoUsuariosComponent } from './componentes/listado-usuarios/listado-usuarios.component';
import { MateriaComponent } from './clases/materia/materia.component';
import { ListadoProfesoresComponent } from './componentes/listado-profesores/listado-profesores.component';
import { ListadoAlumnosComponent } from './componentes/listado-alumnos/listado-alumnos.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    LoginComponent,
    EmailComponent,
    AlertMaterialComponent,
    AltaAdminComponent,
    AltaMateriaComponent,
    ListadoComponent,
    ToolbarComponent,
    InscripcionMateriaComponent,
    FiltrarTipoPipe,
    CondicionNotasPipe,
    HomeComponent,
    InscripcionAdminComponent,
    ListadoMateriasComponent,
    ListadoUsuariosComponent,
    MateriaComponent,
    ListadoProfesoresComponent,
    ListadoAlumnosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatToolbarModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
