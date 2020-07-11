import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {User} from 'firebase';
import {auth} from 'firebase/app';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user:User
  constructor(public afAuth: AngularFireAuth) { }
  
  login()
  {

  }
  
  register()
  {

  }

  logout()
  {

  }

  getCurrentUser()
  {

  }
}
