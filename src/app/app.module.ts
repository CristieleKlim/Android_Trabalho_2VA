import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';


// IMPORTS PROVIDERS HERE

import {FarmaciaProvider} from '../providers/farmacia-provider';
import {RemedioProvider} from '../providers/remedio-provider';

// IMPORTS pages

import {FarmaciaDetailPage} from '../pages/farmacia-detail/farmacia-detail';
import {FarmaciaFromPage} from '../pages/farmacia-from/farmacia-from';
import {FarmaciaPagePage} from '../pages/farmacia-page/farmacia-page';
import {RemedioDetailPage} from '../pages/remedio-detail/remedio-detail';
import {RemedioFromPage} from '../pages/remedio-from/remedio-from';
import {RemedioPagePage} from '../pages/remedio-page/remedio-page';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    FarmaciaDetailPage,
    FarmaciaFromPage,
    FarmaciaPagePage,
    RemedioDetailPage,
    RemedioFromPage,
    RemedioPagePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    FarmaciaDetailPage,
    FarmaciaFromPage,
    FarmaciaPagePage,
    RemedioDetailPage,
    RemedioFromPage,
    RemedioPagePage
  ],
  providers: [FarmaciaProvider, RemedioProvider]
})
export class AppModule {}
