import { Component } from '@angular/core';
import { ContactPage } from '../contact/contact';
import { Alert, NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //Inputs from the home page
  bloodSugarInput1;
  weightInput1;
  bloodSugarInput2;
  weightInput2;
  bloodSugarInput3;
  weightInput3;
  bloodSugarInput4;
  weightInput4;

  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {

  }
  btnClicked() {
    //Calculate average blood sugar and weight
    let bSugar = (+this.bloodSugarInput1 + +this.bloodSugarInput2 + +this.bloodSugarInput3 + +this.bloodSugarInput4) / 4;
    let weight = (+this.weightInput1 + +this.weightInput2 + +this.weightInput3 + +this.weightInput4) / 4;
    let alert = this.alertCtrl.create({
      title: 'Blood Sugar/ weight',
      message: "Average Blood sugar reading for the month - " + bSugar +
        "<br/>Average weight for the month - " + weight,
      buttons: ['Ok'],
    });

    alert.present();
    //Warning for high blood sugar
    if (bSugar > 150) {
      let alert = this.alertCtrl.create({
        title: 'Warning',
        message: "Your Average Blood Sugar Level is High " +
          "<br/> Please disscuss this with your doctor",
        buttons: ['Ok'],
      });
      alert.present();

    }

  }

}
