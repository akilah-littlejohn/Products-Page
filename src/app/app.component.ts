import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'products_page';
  constructor(private router:Router){}
  add_products(){
    this.router.navigate(['/products']);
  }
}
