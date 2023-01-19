import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FakeStoreDataService {
  storeurl: string = `https://fakestoreapi.com/`;
  products:string = `${'products'}`
  categories:string =`${'categories'}`
  


  constructor(private http: HttpClient) { }
  getStoreProductsData() {
    return this.http.get(`${this.storeurl}${this.products}`)
  }
getAllcatergories(){
  return this.http.get(`${this.storeurl}${this.products}/${this.categories}`)

}


}
