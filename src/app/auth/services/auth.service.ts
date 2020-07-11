import { Injectable } from '@angular/core';


import { AngularFireAuth } from '@angular/fire/auth';
import { promise } from 'protractor';


@Injectable({
  providedIn: 'root'
})
export class AuthService {




  constructor(public afAuth: AngularFireAuth
  ) { }

  async sendEmailVerification()
  {
    return (await this.afAuth.currentUser).sendEmailVerification();
  }

  async login(email: string, password: string) {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(email, password);
      return result;
    } catch (error) {
      console.log(error)
    }
  }

  async register(email: string, password: string) {

    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
      this.sendEmailVerification();
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async logout() {

    try {
      await this.afAuth.signOut();
    } catch (error) {
      console.log(error);
    }
  }

}
