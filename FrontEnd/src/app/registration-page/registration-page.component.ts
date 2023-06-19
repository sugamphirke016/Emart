import { HttpClient } from '@angular/common/http';
import { Component, Renderer2 } from '@angular/core';
import { product } from 'src/data-type';
import { ProductService } from '../services/product.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent {

  constructor(private renderer: Renderer2, private http: HttpClient, private product: ProductService, private user: UserService, private router: Router) { }
  name: string = "";
  username: string = "";
  phoneNo: string = "";
  email: string = "";
  password: string = "";
  passwordVisible: boolean = false;
  showPasswordImage: string = 'assets/Photos/unlocked.png';
  ngOnInit() {
    const script = this.renderer.createElement('script');
    script.src = '/assets/myJS/loginscript.js';
    script.type = 'text/javascript';
    this.renderer.appendChild(document.head, script);
  }
  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
    this.showPasswordImage = this.passwordVisible ? 'assets/Photos/locked.png' : 'assets/Photos/unlocked.png';
  }

  // Posting data in all the Databases: Local Server, Firebase and Json-server
  register() {
    let bodyData = {
      "name": this.name,
      "username": this.username,
      "email": this.email,
      "phoneNo": this.phoneNo,
      "password": this.password
    };
    this.http.post("http://localhost:8000/user/create", bodyData).subscribe((resultData: any) => {
      console.log(resultData);
      alert("Your Account has been created! Please Login to your account to start shopping!")
      setTimeout(() => {
        this.router.navigateByUrl('/login');
      }, 0);
    });
    this.http.post('https://e-mart-ecc3a-default-rtdb.firebaseio.com/eMartUsers.json', bodyData).subscribe((res)=>{
      console.log(res);
    })

    this.user.userSignUp(bodyData);
  }


  lockIconSrc: string = "assets/Photos/back_idle.png";
  onLockIconHover(isHovering: boolean): void {
    this.lockIconSrc = isHovering ? "assets/Photos/back_filled.png" : "assets/Photos/back_idle.png";
  }

}















