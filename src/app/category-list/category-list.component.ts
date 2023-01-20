import { Component, OnInit } from '@angular/core';
import { FakeStoreDataService } from '../fake-store-data.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})


export class CategoryListComponent implements OnInit {

  categories: any

  constructor(private storeData: FakeStoreDataService) { }
  ngOnInit(): void {
    this.storeData.getAllcatergories().subscribe(
      (data) => {
        this.categories = data;
        console.log(data)
      }
    )
  }
}
