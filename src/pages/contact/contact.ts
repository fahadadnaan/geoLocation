import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { HomePage } from '../home/home';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  itemList: AngularFireList<any>;
  user: Observable<firebase.User>;
  email = '';
  password = '';
  constructor(public navCtrl: NavController,
    public db: AngularFireDatabase ,
     private fire: AngularFireAuth) {
      this.itemList = db.list('users');
  }



myRegister() {

this.fire.auth.createUserWithEmailAndPassword(this.email, this.password)
.then(user => {
  localStorage.setItem('email', this.fire.auth.currentUser.email );
  this.fire.authState.subscribe(auth => {
    if (auth) {
      localStorage.setItem('uid', auth.uid );
this.itemList.push({
email: this.email ,
uid : auth.uid,
});
    }
  });
  this.navCtrl.push(HomePage);
}).catch( error => {
  console.error(error);
  alert(error);

});


}
}
