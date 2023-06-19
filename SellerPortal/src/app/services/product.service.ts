import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { product } from 'src/data-type';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient, private router: Router) { }
  addProduct(data:product){
    // console.log("Service called!")
    return this.http.post('http://localhost:3000/products',data)
  }
}
