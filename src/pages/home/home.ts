import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Storage } from '@ionic/storage';
import { SMS } from '@ionic-native/sms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  lat: any;
  lng: any;
  phoneNumber: any;
  constructor(private sms: SMS, public navCtrl: NavController, private geolocation: Geolocation, private storage: Storage) {
    
  }



//get Location Automaticly

ionViewDidLoad(){
this.geolocation.getCurrentPosition().then( pos =>{

  
//set latitude
this.lat = pos.coords.latitude;
this.storage.set('latitude', this.lat).then(() => {
  console.log('latitude : ',this.lat);
}).catch((error) => {
  console.log('Error getting latitude', error);
});

//set longitude
this.lng = pos.coords.longitude;
this.storage.set('longitude', this.lng).then(() => {
  console.log('longitude : ',this.lng);
}).catch((error) => {
  console.log('Error getting longitude', error);
});


// Just for Developer
const locationURL = 'http://maps.google.com/?q='+ this.lat +','+this.lng ;
  console.log(locationURL);



// Print parent Error
}).catch((error) => {
  console.log('Error getting location', error);
});

}




SendYourLocation(){
const locationURL = 'http://maps.google.com/?q='+ this.lat +','+this.lng ;
this.sms.send('078022222222', locationURL).then(() => {
console.log('Request Processing'); 
});
}




//get Location Manual

manualLocation(){
  this.geolocation.getCurrentPosition().then( pos =>{

  
    //set latitude
    this.lat = pos.coords.latitude;
    this.storage.set('latitude', this.lat).then(() => {
      console.log('latitude : ',this.lat);
    }).catch((error) => {
      console.log('Error getting latitude', error);
    });
    
    //set longitude
    this.lng = pos.coords.longitude;
    this.storage.set('longitude', this.lng).then(() => {
      console.log('longitude : ',this.lng);
    }).catch((error) => {
      console.log('Error getting longitude', error);
    });
    
    
    // Just for Developer
    const locationURL = 'http://maps.google.com/?q='+ this.lat +','+this.lng ;
      console.log(locationURL);
    
    
    
    // Print parent Error
    }).catch((error) => {
      console.log('Error getting location', error);
    });
    
  }    
}























// //get latitude
// this.storage.get('latitude').then((val) => {
//   console.log(' latitude is : ', val);
// });

// //get longitude
// this.storage.get('longitude').then((val) => {
//   console.log(' longitude is : ', val);
// });