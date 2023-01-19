import { Component, OnInit } from '@angular/core';
import { FakeStoreDataService } from '../fake-store-data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any
  constructor(public storeData: FakeStoreDataService) { }
  ngOnInit() {
    this.storeData.getStoreProductsData().subscribe(
      (data) => {
        this.products = data
        console.log(this.products)
      }

    )

  }


}
