import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth:AngularFireAuth) {

   }




   /* login user */
login(email, password){
  return this.afAuth.auth.signInWithEmailAndPassword(email, password);
}
/* Signup User */
signup(email, password){
return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
}



setUser(){
}

sendPasswordReset(email){
  return firebase.auth().sendPasswordResetEmail(email);
}

inviteUser(email){
  // return firebase.auth().sendSignInLinkToEmail(email);
}
getUser(){
 return firebase.auth().signInAndRetrieveDataWithCustomToken(localStorage.getItem('token'))

}




  }

