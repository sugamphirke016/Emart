import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { cart, priceSummary } from 'src/data-type';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {

  constructor(private product: ProductService, private http: HttpClient) {
    this.validCoupon = false;
    this.invalidCoupon = false;
    this.showMessage = false;
    this.showRemoveButton = false;
    this.emptyCoupon = false;
  }

  myData: string = '';
  cartData: cart[] | undefined;
  lockIconSrc: string = "assets/Photos/back_idle.png";
  quantityOptions = Array.from({ length: 10 }, (_, i) => i + 1);
  showDropdown = false;
  updateMode = false;
  selectedIndex: number | null = null;
  selectedQuantity: number | undefined;
  displayREM_MSG: string = 'none';
  displayMSG: string = 'none';
  displayWISH_MSG: string = 'none';
  priceSummary: priceSummary = {
    price: 0,
    discount: 0,
    tax: 0,
    delivery: 0,
    total: 0
  }

  ngOnInit() {
    this.product.currentCart().subscribe((result) => {
      this.cartData = result;
      let price = 0;
      result.forEach((item) => {
        if (item.quantity) {
          price += +item.price * item.quantity;
        } else {
          price += +item.price;
        }
      });
      this.priceSummary.price = price;
      this.priceSummary.discount = price * .08;
      const taxRate = 0.13;
      this.priceSummary.tax = parseFloat((price * taxRate).toFixed(2));
      this.priceSummary.delivery = 125;
      let totalMoney = price + 125;
      this.priceSummary.total = totalMoney;
    });
  }

  onLockIconHover(isHovering: boolean): void {
    this.lockIconSrc = isHovering ? "assets/Photos/back_filled.png" : "assets/Photos/back_idle.png";
  }

  toggleDropdown(index: number) {
    this.showDropdown = !this.showDropdown;
    if (this.updateMode && this.selectedIndex === index) {
      this.changeQuantity(this.selectedIndex);
      this.updateMode = false;
      this.selectedIndex = null;
    }
    else {
      this.updateMode = true;
      this.selectedIndex = index;
    }
  }

  onQuantityChange(event: any) {
    this.selectedQuantity = event.target.value;
  }

  changeQuantity(i: number) {
    this.product.currentCart().subscribe((result) => {
      const productId = result[i].productId;
      this.product.updateQuantity({ "quantity": this.selectedQuantity }, productId);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    });
  }

  removeProduct(i: number) {
    this.product.currentCart().subscribe((result) => {
      const productId = result[i].productId;
      this.product.removeProductFromCart(productId);
      this.displayMSG = "flex";
      this.displayREM_MSG = "flex";
      setTimeout(() => {
        window.location.reload();
        this.displayMSG = 'none';
        this.displayREM_MSG = 'none';
      }, 3000);
    });
  }

  addToWishlist(i: number) {
    this.product.currentCart().subscribe((result) => {
      const productId = result[i].productId;
      this.product.removeProductFromCart(productId);
      this.displayMSG = "flex";
      this.displayWISH_MSG = "flex";
      setTimeout(() => {
        window.location.reload();
        this.displayMSG = 'none';
        this.displayREM_MSG = 'none';;
      }, 3000);
    });
  }

  couponCode: string = '';
  validCoupon: boolean;
  invalidCoupon: boolean;
  showMessage: boolean;
  showRemoveButton: boolean;
  emptyCoupon: boolean;

  applyCoupon() {
    if (this.couponCode === '') {
      this.emptyCoupon = true;
    }
    this.http.get<any[]>('http://localhost:3000/coupons')
      .subscribe((coupons: any[]) => {
        const coupon = coupons.find(c => c.code === this.couponCode);
        if (coupon && coupon.code === "TESTING") {
          this.validCoupon = true;
          this.invalidCoupon = false;

          this.product.currentCart().subscribe((result) => {
            this.cartData = result;
            let price = 0;
            result.forEach((item) => {
              if (item.quantity) {
                price += +item.price * item.quantity;
              } else {
                price += +item.price;
              }
            });
            this.priceSummary.price = price;
            const taxRate = 0.13;
            this.priceSummary.tax = parseFloat((price * taxRate).toFixed(2));
            this.priceSummary.delivery = 125;
            let totalMoney = price + 125;
            this.priceSummary.discount = parseFloat(((price * .08) + (totalMoney - 1)).toFixed(2));
            totalMoney = 1;
            this.priceSummary.total = totalMoney;
          });
          this.showRemoveButton = true;
        }
        else if (coupon) {
          this.product.currentCart().subscribe((result) => {
            this.cartData = result;
            let price = 0;
            result.forEach((item) => {
              if (item.quantity) {
                price += +item.price * item.quantity;
              } else {
                price += +item.price;
              }
            });
            this.priceSummary.price = price;
            const taxRate = 0.13;
            this.priceSummary.tax = parseFloat((price * taxRate).toFixed(2));
            this.priceSummary.delivery = 125;
            let totalMoney = price + 125;
            this.priceSummary.discount = parseFloat(((price * .08) + (totalMoney * coupon.percent * 0.01)).toFixed(2));
            totalMoney = parseFloat((totalMoney - (totalMoney * coupon.percent / 100)).toFixed(2));
            this.priceSummary.total = totalMoney;
          });
          this.validCoupon = true;
          this.invalidCoupon = false;
          this.showRemoveButton = true;
        }
        else {
          if (this.couponCode !== "") {
            this.validCoupon = false;
            this.invalidCoupon = true;
          }
        }
        this.showMessage = true;
      });
  }

  removeCoupon() {
    this.product.currentCart().subscribe((result) => {
      this.cartData = result;
      let price = 0;
      result.forEach((item) => {
        if (item.quantity) {
          price += +item.price * item.quantity;
        } else {
          price += +item.price;
        }
      });
      this.priceSummary.price = price;
      this.priceSummary.discount = price * .08;
      const taxRate = 0.13;
      this.priceSummary.tax = parseFloat((price * taxRate).toFixed(2));
      this.priceSummary.delivery = 125;
      let totalMoney = price + 125;
      this.priceSummary.total = totalMoney;
    });
    this.couponCode = '';
    this.validCoupon = false;
    this.invalidCoupon = false;
    this.showMessage = false;
    this.showRemoveButton = false;
  }

}