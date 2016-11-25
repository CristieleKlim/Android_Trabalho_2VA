import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {Remedio} from '../../models/remedio';

import {RemedioProvider} from '../../providers/remedio-provider';

import {RemedioFromPage} from '../remedio-from/remedio-from';
import {RemedioDetailPage} from '../remedio-detail/remedio-detail';

/*
  Generated class for the RemedioPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-remedio-page',
  templateUrl: 'remedio-page.html'
})
export class RemedioPagePage {

  items: Remedio[];

  constructor(
    public navCtrl: NavController,
    public remedioProvider: RemedioProvider
  ) {

    // Populate marcas
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
    this.remedioProvider.findAll().subscribe(remedios => {
      this.items = remedios;
    });
  }

  goToCreateRemedio(){
    this.navCtrl.push(RemedioFromPage);
  }

  itemTapped(event, item) {

    this.navCtrl.push(RemedioDetailPage, {
      remedio: item
    });
  }

}
