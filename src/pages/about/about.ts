
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { HomePage } from '../home/home';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  email = '';
  password = '';
  constructor(public navCtrl: NavController, private fire: AngularFireAuth) {

  }
  logout() {
    this.fire.auth.signOut();
    localStorage.setItem('email', '' );
    localStorage.setItem('uid', '' );

    this.navCtrl.push(HomePage);
    console.log('user signOut');
  }

  myLogin() {
    this.fire.auth.signInWithEmailAndPassword(this.email, this.password)
    .then(user => {
      localStorage.setItem('email', this.fire.auth.currentUser.email );
      console.log('email', this.fire.auth.currentUser.email );
      this.fire.authState.subscribe(auth => {
        if (auth) {
  localStorage.setItem('uid', auth.uid );
  console.log('uid', auth.uid );
        }
      });
    this.navCtrl.push(HomePage);
    }).catch(error => {
      console.error(error);
      alert(error);
    });
    
  }
  
}
