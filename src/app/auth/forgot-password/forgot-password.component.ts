import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {FormControl} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {

  constructor(private authService:AuthService,
    private router:Router) { }

  userEmail = new FormControl('');



  async onReset()
  { 
    try {
      const email = this.userEmail.value;
      this.authService.resetPassword(email);
  
      window.alert('Email Sent, Check your inbox!')
  
      this.router.navigate(['/home'])
    } catch (error) {
      console.log(error)
    }
   
  }
}
