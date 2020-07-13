import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { tap, map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CanAdminGuard implements CanActivate {

  constructor(private authService: AuthService) {

  }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.user$.pipe(
      take(1),
      map((user)=> user && this.authService.isAdmin(user)),
      tap((canEdit)=>
        {
          if(!canEdit)
          {
            window.alert('Access denied. Must have permision to Admin.');
          }
        })
    )
  }

}
