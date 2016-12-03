import { Component } from '@angular/core';
import { NavController, ModalController }   from 'ionic-angular';

import { AddFormPage } from '../add-form/add-form';
import { Tasks,Task } from '../../data/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public modalCtrl: ModalController, public navCtrl: NavController) {
  }

  tasks = Tasks;

  onAddClick(id: number) : void{
  	if(typeof id === 'undefined') id = -1;

 	let modal = this.modalCtrl.create(AddFormPage, {taskID: id});
    modal.present();
  }
}
