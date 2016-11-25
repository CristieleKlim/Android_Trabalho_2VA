import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

import {RemedioProvider} from '../../providers/remedio-provider';

import {RemedioPagePage} from '../remedio-page/remedio-page';

/*
  Generated class for the RemedioFrom page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-remedio-from',
  templateUrl: 'remedio-from.html'
})
export class RemedioFromPage {

  remedio = {};
  title: string = "Adicionar Remedio";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public remedioProvider: RemedioProvider) {

    let selectedItem = navParams.get('remedio');

    if( selectedItem != undefined ){
      this.title = "Atualizar Remedio";
      this.remedio = selectedItem;
    }


  }


  save(){

    // DATA VALIDATION

    if ("_id" in this.remedio) {
      this.remedioProvider.update(this.remedio).subscribe(res => {
        this.navCtrl.push(RemedioPagePage, {});
      }, error => {
        console.log(error);
      });
    } else {
      this.remedioProvider.create(this.remedio).subscribe(res => {
        this.navCtrl.push(RemedioPagePage, {});
      }, error => {
        console.log(error);
      });
    }


  }

}
