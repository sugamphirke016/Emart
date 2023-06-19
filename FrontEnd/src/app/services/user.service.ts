import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { login, signUp } from 'src/data-type';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  userSignUp(user: signUp){
    this.http.post('http://localhost:3000/users', user, {observe: 'response'}).subscribe((result)=>{
      if(result){
        localStorage.setItem('user',JSON.stringify(result.body));
      }
    })
  }
  userLogin(data: login){
    this.http.get<signUp[]>(`http://localhost:3000/users?username=${data.username}&password=${data.password}`, {observe:'response'}).subscribe((result)=>{
      if(result && result.body){
        localStorage.setItem('user', JSON.stringify(result.body));
        console.log("User signedIn successfully - from JSON Server!");
      }
    })
  }
}
