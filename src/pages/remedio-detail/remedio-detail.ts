import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

import {RemedioProvider} from '../../providers/remedio-provider';
import {RemedioFromPage} from '../remedio-from/remedio-from';
import {RemedioPagePage} from '../remedio-page/remedio-page';

/*
  Generated class for the RemedioDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-remedio-detail',
  templateUrl: 'remedio-detail.html'
})
export class RemedioDetailPage {

  selectedItem = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public remedioProvider: RemedioProvider) {

    // get nav param
    this.selectedItem = navParams.get('remedio');

  }

  updateItem(event, item) {
    this.navCtrl.push(RemedioFromPage, {
      remedio: item
    });
  }

  deleteItem(event, item) {
    this.remedioProvider.delete(this.selectedItem).subscribe( res => {
      this.navCtrl.push(RemedioPagePage);
    });

  }

}
