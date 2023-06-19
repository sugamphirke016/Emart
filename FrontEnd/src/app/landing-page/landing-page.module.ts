import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Carousel1Component } from '../carousel1/carousel1.component';
import { Carousel1Module } from '../carousel1/carousel1.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    Carousel1Module
  ]
})
export class LandingPageModule implements OnInit { 
  myData: string = '';

  ngOnInit() {
    // Retrieve data from localStorage

  }
}
