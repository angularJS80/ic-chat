import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireDatabase} from "angularfire2/database-deprecated";
//,FirebaseListObservable
//import * as firebase from 'firebase/app';
/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  username:string='';
  message:string='';
  s ;
  messages:any[] =[];
  constructor(public navCtrl: NavController, public navParams: NavParams
    ,private db:AngularFireDatabase
  ) {
    console.log(this.navParams)
    this.username = this.navParams.get('username');



    this.s = this.db.list('/chat').subscribe(data=>{
      this.messages = data;
      /*data.map(elem=>{
          this.messages.push(elem);
        }
      )*/
      console.log(data);
    });
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad ChatPage');
  }

  sendMessage() {
    this.db.list('/chat').push(
      {
        username:this.username
        ,message:this.message
      }
    ).then(()=>{


    }).catch(()=>{

    })
    this.message='';
    console.log('ionViewDidLoad ChatPage');
  }

}
