import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService,
    private router:Router) { }

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  ngOnInit(): void {
  }

  async onLogin() {
    const{email,password} = this.loginForm.value;

    try {
      const user = await this.authService.login(email,password);

      if(user && user.user.emailVerified)
      {

        this.router.navigate(['/home']);
      }
      else{ 
        if (user) {
          this.router.navigate(['/verification-email']);
        }
        else{
          this.router.navigate(['/register']);
        }

      }
      
    } catch (error) {

      console.log(error);
      
    }

    
  }

  async onGoogleLogin()
  {
    try {
      this.authService.loginGoogle();
    } catch (error) {
      console.log(error)
    } 
  }

}
