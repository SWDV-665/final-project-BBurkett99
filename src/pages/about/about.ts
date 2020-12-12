import { Component } from '@angular/core';
import { ContactPage } from '../contact/contact';
import { Alert, NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  //Inputs from the main page
  systolicInput1;
  diastolicInput1;
  systolicInput2;
  diastolicInput2;
  systolicInput3;
  diastolicInput3;
  systolicInput4;
  diastolicInput4;

  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {

  }
  btnClicked() {
    //Calculate average blood pressure
    let systolic = (+this.systolicInput1 + +this.systolicInput2 + +this.systolicInput3 + +this.systolicInput4) / 4;
    let diastolic = (+this.diastolicInput1 + +this.diastolicInput2 + +this.diastolicInput3 + +this.diastolicInput4) / 4;
    let alert = this.alertCtrl.create({
      title: 'Blood Pressure',
      message: "Average Systolic reading for the month - " + systolic +
        "<br/>Average diastolic for the month - " + diastolic,
      buttons: ['Ok'],
    });


    alert.present();
    //Warning for high blood Pressure

    if (systolic > 130 || diastolic > 90) {
      let alert = this.alertCtrl.create({
        title: 'Warning',
        message: "Your Average Blood Pressure Level is High " +
          "<br/> Please disscuss this with your doctor",
        buttons: ['Ok'],
      });
      alert.present();
    }

  }
}
