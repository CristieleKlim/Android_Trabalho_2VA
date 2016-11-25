import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// MODELS

import {Farmacia} from '../../models/farmacia';

// PROVIDER

import {FarmaciaProvider} from '../../providers/farmacia-provider';


// paginas

import{FarmaciaFromPage} from '../farmacia-from/farmacia-from';
import{FarmaciaDetailPage} from '../farmacia-detail/farmacia-detail';
/*
  Generated class for the FarmaciaPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-farmacia-page',
  templateUrl: 'farmacia-page.html'
})
export class FarmaciaPagePage {

  items: Farmacia[];

  constructor(
    public navCtrl: NavController,
    public farmaciaProvider: FarmaciaProvider
  ) {

    this.findAll();

  }

  getItems(ev: any) {

    // recupera o valor do evento
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }  else {
      this.findAll();
    }

  }

  findAll(){
    this.farmaciaProvider.findAll().subscribe(farmacias => {
        this.items = farmacias;
      });
  }

  goToCreateFarmacia(){
    this.navCtrl.push(FarmaciaFromPage);
  }

  itemTapped(event, item) {

    this.navCtrl.push(FarmaciaDetailPage, {
      farmacia: item
    });
  }

}
