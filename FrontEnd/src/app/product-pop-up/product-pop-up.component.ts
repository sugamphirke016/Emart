import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { cart, product, signUp } from 'src/data-type';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-product-pop-up',
  templateUrl: './product-pop-up.component.html',
  styleUrls: ['./product-pop-up.component.scss'],
  animations: [
    trigger('headerAnimation', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)', opacity: 0 }),
        animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ transform: 'translateY(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms cubic-bezier(0.35, 0, 0.25, 1)', style({ transform: 'translateY(-100%)', opacity: 0 }))
      ])
    ])
  ]
})
export class ProductPopUpComponent implements OnInit {

  isAddedToCart = false;
  buttonLabel = 'Add to Cart';


  productData: undefined | product;
  colors: string[] = [];
  description: string[] = [];
  imageSources: string[] = [];
  productQuantity: number = 1
  lockIconSrc: string = "assets/Photos/back_idle.png";

  url1: string | undefined = "";

  onLockIconHover(isHovering: boolean): void {
    this.lockIconSrc = isHovering ? "assets/Photos/back_filled.png" : "assets/Photos/back_idle.png";
  }
  constructor(private activeRoute: ActivatedRoute, private product: ProductService, private user: UserService, private router: Router, private location: Location) { }
  ngOnInit(): void {
    let productId = this.activeRoute.snapshot.paramMap.get('productId');

    productId && this.product.getProduct(productId).subscribe((result) => {
      // console.log(result);
      this.productData = result;
      this.colors = this.getArrayValues(result.color);
      this.description = this.getDescriptionArray(result.description);
      this.imageSources = this.getArrayValues(result.gallery);

      this.url1 = this.productData.image;

      let user = localStorage.getItem('user');

      if(user){
        let userId = user && JSON.parse(user)[0].id;
        this.product.getCartList(userId);

        this.product.cartData.subscribe((result)=>{
          let items = result.filter((item:product)=>productId?.toString()===item.productId?.toString);
          if(items.length){
            
          }
        })
      }
      
    })
  }

  getArrayValues(colorString: string): string[] {
    return colorString.split(' ');
  }

  getDescriptionArray(descriptionString: String): string[] {
    return descriptionString.split(";");
  }

  goBack() {
    this.location.back();
  }

  handleQuantity(val: string) {
    if (this.productQuantity < 20 && val == 'plus') {
      this.productQuantity += 1;
    }
    else if (this.productQuantity > 1 && val == 'min') {
      this.productQuantity -= 1;
    }
  }


  addToCart() {
    if (this.productData) {
      this.productData.quantity = this.productQuantity;
      if (!localStorage.getItem('user')) {
        // console.warn(this.productData);
        console.log("No user logged in");
        this.product.localAddToCart(this.productData)
        console.log("Item added to cart throught the localcart");
      } else {
        console.log("User is logged in!");
        let user = localStorage.getItem('user');
        let userId = user && JSON.parse(user)[0].id;
        let CartData: cart = {
          ...this.productData,
          userId,
          productId: this.productData.id,
        }
        delete CartData.id;
        console.log(CartData)
        this.product.addToCart(CartData).subscribe((result) => {
          console.log("Item added in cart in users account");
          this.product.getCartList(userId);

        })
      }
    }
    this.isAddedToCart = true;
    this.buttonLabel = 'Added to Cart';
  }

  
  changeImageCard1(event: any) {
    this.url1 = event.target.src;
  }

}

