import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  user: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth) {

   }


  signup(email: string, password: string): any {
    return this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password);
  }


  login(email: string, password: string) {
    return this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password).then( res => {
        console.log(res);
      });
  }

  forgot(email: string) {
    return this.firebaseAuth
      .auth
      .sendPasswordResetEmail(email);
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut();
  }
}
