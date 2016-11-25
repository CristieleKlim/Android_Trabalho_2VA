import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { Http, Headers, RequestOptions } from '@angular/http';


import {Farmacia} from '../models/farmacia';
/*
  Generated class for the FarmaciaProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class FarmaciaProvider {

   apiUrl = "http://localhost:3000";

  constructor(public http: Http) {
   
  }
  //carrega todas farmacia
  findAll(): Observable<Farmacia[]> {
      return this.http.get(`${this.apiUrl}/farmacia`)
          .map(res => <Farmacia[]>res.json());
  }


  create(data){
    let body = JSON.stringify(data); 

    let headers = new Headers ({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`${this.apiUrl}/farmacia`, body, options)
      .map(res => res.json());
  }


  update(data){
    let body = JSON.stringify(data); 

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.put(`${this.apiUrl}/farmacia/`, body, options)
      .map(res => res.json());
  }

  delete(data){
    return this.http.delete(`${this.apiUrl}/farmacia/${data._id}`)
      .map(res => res);
  }


}
