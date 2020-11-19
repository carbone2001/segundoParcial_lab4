import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AlertMaterialService } from '../servicios/alert-material.service';
import { AuthService } from '../servicios/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(
    public auth:AuthService,
    public alert:AlertMaterialService
  ){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    var resultado = (this.auth.usuarioInfo.tipo == "ADMINISTRADOR");
    if(!resultado)
    {
      this.alert.openDialog("Error","Necesita estar logeado para acceder a este sitio");
    }
    return resultado;
  }
  
}
