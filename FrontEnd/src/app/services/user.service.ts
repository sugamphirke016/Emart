import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { login, signUp, signUpWithJSON } from 'src/data-type';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  userSignUp(user: signUpWithJSON){
    user.avatar = "https://sugamphirke.com/Projects/emart/img/default_user.jpg";
    this.http.post('http://localhost:3000/users', user, {observe: 'response'}).subscribe((result)=>{
      if(result){
        // localStorage.setItem('user',JSON.stringify(result.body));
        console.error("User data stored in db.json. Check what is stored: ", user);
      }
    })
  }

  userLogin(data: login){
    this.http.get<signUpWithJSON[]>(`http://localhost:3000/users?username=${data.username}&password=${data.password}`, {observe:'response'}).subscribe((result)=>{
      if(result && result.body){
        localStorage.setItem('user', JSON.stringify(result.body));
      }
    })
  }
  
  
}
