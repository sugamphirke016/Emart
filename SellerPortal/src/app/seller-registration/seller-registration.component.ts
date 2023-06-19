import { HttpClient } from '@angular/common/http';
import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-seller-registration',
  templateUrl: './seller-registration.component.html',
  styleUrls: ['./seller-registration.component.css']
})
export class SellerRegistrationComponent {
  constructor(private renderer: Renderer2, private http: HttpClient) { }
  name: string='';
  username: string='';
  email: string='';
  phoneNo: string='';
  password: string='';
  passwordVisible: boolean = false;
  showPasswordImage: string = 'assets/Photos/unlocked.png';
  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
    this.showPasswordImage = this.passwordVisible ? 'assets/Photos/locked.png' : 'assets/Photos/unlocked.png';
  }
  register() { 
    let bodyData = {
      name: this.name,
      username: this.username,
      email: this.email,
      phoneNo: this.phoneNo,
      password: this.password
    };
    this.http.post("http://localhost:8000/seller/create", bodyData).subscribe((resultData: any) => {
      console.log(resultData);
      alert("Student Registered Successfully")
    });
  }
}
