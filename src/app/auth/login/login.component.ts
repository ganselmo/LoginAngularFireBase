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
      this.router.navigate(['/home']);
    } catch (error) {

      console.log(error);
      
    }

    
  }

}
