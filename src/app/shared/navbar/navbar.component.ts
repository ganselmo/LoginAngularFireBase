import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user.interface';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public user$: Observable<User> = this.authService.afAuth.user;

  
  constructor(private authService:AuthService,
    private router:Router) { 

   }

  ngOnInit(): void {

    
  }

  async logout(){
    
    try {
      await this.authService.logout();
      this.router.navigate(['/login'])
    } catch (error) {
      console.log(error)
    }
    

  }

}
