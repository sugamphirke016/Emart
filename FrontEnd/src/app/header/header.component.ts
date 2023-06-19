import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit{
  constructor(private router: Router, private product: ProductService) {}
  cartItems = 0
  accountIconSrc: string = "assets/Photos/account_idle.png";
  cartIconSrc: string = "assets/Photos/cart_idle.png";
  settingsIconSrc: string = "assets/Photos/settings_idle.png";

  onAccountIconHover(isHovering: boolean): void {
    this.accountIconSrc = isHovering ? "assets/Photos/account_filled.jpg" : "assets/Photos/account_idle.png";
  }

  onCartIconHover(isHovering: boolean): void {
    this.cartIconSrc = isHovering ? "assets/Photos/cart_filled.png" : "assets/Photos/cart_idle.png";
  }

  onSettingsIconHover(isHovering: boolean): void {
    this.settingsIconSrc = isHovering ? "assets/Photos/settings_filled.png" : "assets/Photos/settings_idle.png";
  }

  ngOnInit(): void{
    let cartData = localStorage.getItem('localCart');
    if(cartData){
      this.cartItems = JSON.parse(cartData).length;
    }
    else{
      this.product.currentCart().subscribe((result)=>{
        this.cartItems = result.length;
      });
    }
  }
}



