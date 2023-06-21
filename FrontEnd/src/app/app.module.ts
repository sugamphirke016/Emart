import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloaderComponent } from './preloader/preloader.component';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { BottomNavBarComponent } from './bottom-nav-bar/bottom-nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { NewsletterComponent } from './newsletter/newsletter.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SellerComponent } from './seller/seller.component';
import { Carousel1Component } from './carousel1/carousel1.component';
import { NewsLetterComponent } from './news-letter/news-letter.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductPopUpComponent } from './product-pop-up/product-pop-up.component';
import { CartComponent } from './cart/cart.component';

import { MatDialogModule } from '@angular/material/dialog';
import { OrderplacedComponent } from './orderplaced/orderplaced.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { PersonalInformationComponent } from './navigation-items/personal-information/personal-information.component';
import { ValidateAccountComponent } from './navigation-items/validate-account/validate-account.component';
import { AddressesComponent } from './navigation-items/addresses/addresses.component';
import { YourCouponsComponent } from './navigation-items/your-coupons/your-coupons.component';
import { PaymentMethodsComponent } from './navigation-items/payment-methods/payment-methods.component';
import { OrderHistoryComponent } from './navigation-items/order-history/order-history.component';
import { WishlistComponent } from './navigation-items/wishlist/wishlist.component';
import { ToHelpComponent } from './navigation-items/to-help/to-help.component';
import { LogoutComponent } from './navigation-items/logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
    TopNavBarComponent,
    BottomNavBarComponent,
    FooterComponent,
    HeaderComponent,
    LandingPageComponent,
    RegistrationPageComponent,
    LoginPageComponent,
    PageNotFoundComponent,
    NewsletterComponent,
    SellerComponent,
    Carousel1Component,
    NewsLetterComponent,
    ProductCardComponent,
    ProductPopUpComponent,
    CartComponent,
    OrderplacedComponent,
    TestimonialComponent,
    CheckoutComponent,
    ProfilePageComponent,
    PersonalInformationComponent,
    ValidateAccountComponent,
    AddressesComponent,
    YourCouponsComponent,
    PaymentMethodsComponent,
    OrderHistoryComponent,
    WishlistComponent,
    ToHelpComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FontAwesomeModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
