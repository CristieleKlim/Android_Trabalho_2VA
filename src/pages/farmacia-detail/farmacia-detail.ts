import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

import {FarmaciaProvider} from '../../providers/farmacia-provider';

import {FarmaciaFromPage} from '../farmacia-from/farmacia-from';
import {FarmaciaPagePage} from '../farmacia-page/farmacia-page';


/*
  Generated class for the FarmaciaDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-farmacia-detail',
  templateUrl: 'farmacia-detail.html'
})
export class FarmaciaDetailPage {

  selectedItem = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public farmaciaProvider: FarmaciaProvider) {

    this.selectedItem = navParams.get('farmacia');

  }

  updateItem(event, item) {
    this.navCtrl.push(FarmaciaFromPage, {
      farmacia: item
    });
  }

  deleteItem(event, item) {
    this.farmaciaProvider.delete(this.selectedItem).subscribe( res => {
      this.navCtrl.push(FarmaciaPagePage);
    });

  }

}
