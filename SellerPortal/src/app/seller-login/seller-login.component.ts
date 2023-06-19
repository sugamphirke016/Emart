import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-login',
  templateUrl: './seller-login.component.html',
  styleUrls: ['./seller-login.component.css']
})
export class SellerLoginComponent implements OnInit {
  constructor(private renderer: Renderer2, private router: Router,private http: HttpClient) { }

ngOnInit(): void{}

  username: string='';
  password: string='';
  passwordVisible: boolean = false;
  showPasswordImage: string = 'assets/Photos/unlocked.png';
  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
    this.showPasswordImage = this.passwordVisible ? 'assets/Photos/locked.png' : 'assets/Photos/unlocked.png';
  }
  login() {
    let bodyData = {
      username: this.username,
      password: this.password,
    };
  
    this.http.post("http://localhost:8000/seller/login", bodyData).subscribe((resultData: any) => {
      console.log(resultData);
      if (resultData.status) {
        // show pop-up card
        const popUpCard = document.createElement('div');
        popUpCard.classList.add('pop-up-card');
        popUpCard.innerText = 'Logged in successfully!';
        popUpCard.style.backgroundColor = 'green';
        popUpCard.style.color = 'white';
        popUpCard.style.padding = '20px';
        popUpCard.style.margin = '0 auto';
        popUpCard.style.alignItems = 'center';
        popUpCard.style.alignContent = 'center';
        document.body.appendChild(popUpCard);
  
        // redirect to home page after 5 seconds
        setTimeout(() => {
          this.router.navigateByUrl('/seller/home');
          // this.router.navigateByUrl('http://localhost:4202');
          document.body.removeChild(popUpCard);
        }, 5000);
      } else {
        alert("Incorrect Email or Password");
        console.log("Error login");
      }
    });
  }
}
