import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import {Remedio} from '../models/remedio';

/*
  Generated class for the RemedioProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class RemedioProvider {

  apiUrl = "http://localhost:3000";

  constructor(public http: Http) {
    
  }
    //carrega todas remedio
  findAll(): Observable<Remedio[]> {
      return this.http.get(`${this.apiUrl}/remedio`)
          .map(res => <Remedio[]>res.json());
  }


  create(data){
    let body = JSON.stringify(data); 

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`${this.apiUrl}/remedio`, body, options)
      .map(res => res.json());
  }


  update(data){
    let body = JSON.stringify(data); 

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.put(`${this.apiUrl}/remedio/`, body, options)
      .map(res => res.json());
  }

  delete(data){
    return this.http.delete(`${this.apiUrl}/remedio/${data._id}`)
      .map(res => res);
  }

}
