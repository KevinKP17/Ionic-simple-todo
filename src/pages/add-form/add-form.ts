import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Task,Tasks } from '../../data/storage';

@Component({
  selector: 'page-add-form',
  templateUrl: 'add-form.html'
})

export class AddFormPage {
	targetID;
	obj;

	constructor(public navCtrl: NavController, params: NavParams){
		this.targetID = params.get('taskID');
		let that = this;

		Tasks.forEach(function(value, key){
			if(that.targetID == value.id){
				that.obj = value;
			}
		})

		console.log(that.obj);
	}

}