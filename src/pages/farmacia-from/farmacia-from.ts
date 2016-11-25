import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';


import {FarmaciaProvider} from '../../providers/farmacia-provider';

import {FarmaciaPagePage} from '../farmacia-page/farmacia-page';


/*
  Generated class for the FarmaciaFrom page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-farmacia-from',
  templateUrl: 'farmacia-from.html'
})
export class FarmaciaFromPage {

  farmacia = {};
  title: string = "Adicionar Farmacia";

  constructor(public navCtrl: NavController,
  public navParams: NavParams,
  public farmaciaProvider: FarmaciaProvider ) {

    let selectedItem = navParams.get('farmacia');

    if (selectedItem != undefined ){
      this.title = "Atualizar Farmacia";
      this.farmacia = selectedItem;
    }

  }

  save(){

    // DATA VALIDATION

    if ("_id" in this.farmacia) {
      this.farmaciaProvider.update(this.farmacia).subscribe(res => {
        this.navCtrl.push(FarmaciaPagePage, {});
      }, error => {
        console.log(error);
      });
    } else {
      this.farmaciaProvider.create(this.farmacia).subscribe(res => {
        this.navCtrl.push(FarmaciaPagePage, {});
      }, error => {
        console.log(error);
      });
    }


  }


}
