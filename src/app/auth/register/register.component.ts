import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl}  from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService,
    private router:Router) { }

  registerForm = new FormGroup({
    email: new FormControl(''),
    password:new FormControl('')
  })

  ngOnInit(): void {
  }

  async onRegister()
  {
    const{email,password} = this.registerForm.value;

    try {
      const user = await this.authService.register(email,password);

      if(user)
      {
        this.checkUserIsVerified(user);
     
      }
      
    } catch (error) {

      console.log(error);
      
    }

  }

  private checkUserIsVerified(user: User) {
    if (user && user.emailVerified) {

      this.router.navigate(['/home']);
    }
    else {
      if (user) {
        this.router.navigate(['/verification-email']);
      }
      else {
        this.router.navigate(['/register']);
      }

    }
  }

}
