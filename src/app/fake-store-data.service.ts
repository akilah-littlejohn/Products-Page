import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FakeStoreDataService {
  storeurl: string = `https://fakestoreapi.com/products`;


  constructor(private http: HttpClient) { }
  getStoreData() {
    return this.http.get(this.storeurl)
  }



}
