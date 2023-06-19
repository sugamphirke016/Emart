import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from 'src/data-type';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-seller-home-page',
  templateUrl: './seller-home-page.component.html',
  styleUrls: ['./seller-home-page.component.css']
})
export class SellerHomePageComponent {
  constructor(private http: HttpClient, private router:Router, private product:ProductService){}
  product_name: string = '';
  product_price: string = '';
  product_color: string = '';
  product_category: string = '';
  product_desc: string = '';
  product_url: string = '';

  submit(data:product) {
    // console.warn(this.product_name, this.product_category, this.product_color, this.product_price, this.product_desc, this.product_url)
    this.product.addProduct(data).subscribe((result)=>{
      console.log(result);
    })
  }

}
