import { NgModule } from '@angular/core';
import { RouterModule, Routes, Scroll } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProductPopUpComponent } from './product-pop-up/product-pop-up.component';
import { CartComponent } from './cart/cart.component';
import { OrderplacedComponent } from './orderplaced/orderplaced.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch : 'full'
  },
  {
    path:'order',
    component: OrderplacedComponent
  },
  {
    path: 'details/:productId',
    component: ProductPopUpComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },

  {
    path: 'register',
    component: RegistrationPageComponent
  },
  {
    path: 'home',
    component: LandingPageComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }



