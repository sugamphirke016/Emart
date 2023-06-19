import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellerHomePageComponent } from './seller-home-page/seller-home-page.component';
import { SellerLoginComponent } from './seller-login/seller-login.component';
import { SellerRegistrationComponent } from './seller-registration/seller-registration.component';


const routes: Routes = [
  {
    path: "seller/login",
    component: SellerLoginComponent
  },
  {
    path: '',
    redirectTo: 'seller/login',
    pathMatch : 'full'
  },
  {
    path: "seller/register",
    component: SellerRegistrationComponent
  },
  {
    path: 'seller/home',
    component: SellerHomePageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
