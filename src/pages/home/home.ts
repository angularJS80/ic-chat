import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import {ChatPage} from "../chat/chat";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public alertCtrs:AlertController) {

  }

  username;

  loginUser(){
    console.log(this.username);

    console.log(/^[a-zA-Z0-9]+$/.test(this.username));

    if(/^[a-zA-Z0-9]+$/.test(this.username)){
      this.navCtrl.push(ChatPage,{username:this.username});
    }else{
      this.showAlert('error','Invalidate UserName');
    }
  }

  showAlert(title:string,message:string) {
    let alert = this.alertCtrs.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }


}
