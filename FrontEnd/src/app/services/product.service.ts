import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { cart, product, quant } from 'src/data-type';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  cartData = new EventEmitter<product[] | []>();

  constructor(private http: HttpClient, private router: Router) { }

  trendyProducts() {
    return this.http.get<product[]>("http://localhost:3000/products")
  }
  getProduct(id: string) {
    return this.http.get<product>(`http://localhost:3000/products/${id}`)
  }

  localAddToCart(data: product) {
    let cartData = [];
    let localCart = localStorage.getItem('localCart');
    if (!localCart) {
      localStorage.setItem('localCart', JSON.stringify([data]));
      this.cartData.emit([data]);
    } else {
      cartData = JSON.parse(localCart);
      cartData.push(data);
      localStorage.setItem('localCart', JSON.stringify(cartData));
      this.cartData.emit(cartData)
    }
  }

  addToCart(cartData: cart) {
    return this.http.post('http://localhost:3000/cart', cartData)
  }

  getCartList(userId: number) {
    return this.http.get<product[]>('http://localhost:3000/cart?userId=' + userId,
      { observe: 'response' }).subscribe((result) => {
        console.warn(result);

        if (result && result.body) {
          this.cartData.emit(result.body);
        }
      })
  }

  currentCart() {
    let user = localStorage.getItem('user');
    let userId = user && JSON.parse(user)[0].id;
    return this.http.get<cart[]>('http://localhost:3000/cart?userId=' + userId)
  }

  updateQuantity(quantity: quant, product: number) {
    let user = localStorage.getItem('user');
    let userId = user && JSON.parse(user)[0].id;
    let cartId: number | undefined;

    return this.http.get<cart[]>('http://localhost:3000/cart?userId=' + userId + '&productId=' + product).subscribe((result) => {
      cartId = result[0].id;
      return this.http.patch<cart[]>('http://localhost:3000/cart/'+cartId, quantity)
        .subscribe(result => {
          // console.log(result);
        })
    });
  }

  removeProductFromCart(product:number){
    let user = localStorage.getItem('user');
    let userId = user && JSON.parse(user)[0].id;
    let cartId: number | undefined;
    return this.http.get<cart[]>('http://localhost:3000/cart?userId=' + userId + '&productId=' + product).subscribe((result) => {
      cartId = result[0].id;
      return this.http.delete<cart[]>('http://localhost:3000/cart/'+cartId).subscribe((result)=>{
        console.log("Product removed form the cart"); 
      });
    });

  }
}
