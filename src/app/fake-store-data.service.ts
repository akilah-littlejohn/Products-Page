import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FakeStoreDataService {
  storeurl: string = `https://fakestoreapi.com/products`;
  products: unknown;

  constructor(private http: HttpClient) { }
  getStoreData() {
    return this.http.get(this.storeurl).subscribe(
      data => {
        this.products = data
        console.log(this.products)
      }
    )
  }

}
