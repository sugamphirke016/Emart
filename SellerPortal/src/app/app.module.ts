import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SellerLoginComponent } from './seller-login/seller-login.component';
import { SellerRegistrationComponent } from './seller-registration/seller-registration.component';
import { SellerHomePageComponent } from './seller-home-page/seller-home-page.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    SellerLoginComponent,
    SellerRegistrationComponent,
    SellerHomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
