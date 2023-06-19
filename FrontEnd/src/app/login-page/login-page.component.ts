import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { cart, product } from 'src/data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit{
  constructor(private renderer: Renderer2, private router: Router,private http: HttpClient, private user: UserService, private product: ProductService) { }
  title = 'app';
  ngOnInit() {
    const script = this.renderer.createElement('script');
    script.src = '/assets/myJS/loginscript.js';
    script.type = 'text/javascript';
    this.renderer.appendChild(document.head, script);
  }

  password: string = '';
  passwordVisible: boolean = false;
  showPasswordImage: string = 'assets/Photos/unlocked.png';
  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
    this.showPasswordImage = this.passwordVisible ? 'assets/Photos/locked.png' : 'assets/Photos/unlocked.png';
  }

  lockIconSrc: string = "assets/Photos/back_idle.png";
  onLockIconHover(isHovering: boolean): void {
    this.lockIconSrc = isHovering ? "assets/Photos/back_filled.png" : "assets/Photos/back_idle.png";
  }

  username: string = '';
  login() {
    // console.log(this.username);
    // console.log(this.password);
  
    let bodyData = {
      "username": this.username,
      "password": this.password,
    };
    
    this.http.post("http://localhost:8000/user/login", bodyData).subscribe((resultData: any) => {
      console.log(resultData);
      if (resultData.status) {
        // show pop-up card
        const popUpCard = document.createElement('div');
        popUpCard.classList.add('pop-up-card');
        popUpCard.innerText = 'Logged in successfully!';
        popUpCard.style.backgroundColor = 'lightblue';
        popUpCard.style.color = 'white';
        popUpCard.style.padding = '20px';
        popUpCard.style.margin = '0 auto';
        popUpCard.style.alignItems = 'center';
        document.body.appendChild(popUpCard);
        
        // redirect to home page after 5 seconds
        setTimeout(() => {
          this.router.navigateByUrl('/home');
          document.body.removeChild(popUpCard);
          this.localCartToRemoveCart();
        }, 3000);
      } else {
        alert("Incorrect Email or Password");
        console.log("Error login");
      }
    });

    this.user.userLogin(bodyData);
  }

  localCartToRemoveCart(){
    let data = localStorage.getItem('localCart');
    let user = localStorage.getItem('user');
    let userId = user && JSON.parse(user)[0].id;
    if(data){
      let cartDataList:product[] = JSON.parse(data);
      cartDataList.forEach((product: product, index)=>{
        let cartData:cart = {
          ...product,
          productId:product.id,
          userId
        }

        delete cartData.id;
        setTimeout(()=>{
          this.product.addToCart(cartData).subscribe((result)=>{
            if(result){
              console.log("LocalCart storage items shifted to db");
              
            }
          })
          if(cartDataList.length === index+1){
            localStorage.removeItem('localCart')
          }
        },500)
      })
    }
    setTimeout(()=>{
      console.log("Current User Cart Items")
      this.product.getCartList(userId)
    },500)

  }
}
