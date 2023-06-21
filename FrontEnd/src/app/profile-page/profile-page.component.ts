import { Component } from '@angular/core';
import { ValidateAccountComponent } from '../navigation-items/validate-account/validate-account.component';
import { PersonalInformationComponent } from '../navigation-items/personal-information/personal-information.component';
import { AddressesComponent } from '../navigation-items/addresses/addresses.component';
import { YourCouponsComponent } from '../navigation-items/your-coupons/your-coupons.component';
import { PaymentMethodsComponent } from '../navigation-items/payment-methods/payment-methods.component';
import { OrderHistoryComponent } from '../navigation-items/order-history/order-history.component';
import { WishlistComponent } from '../navigation-items/wishlist/wishlist.component';
import { ToHelpComponent } from '../navigation-items/to-help/to-help.component';
import { LogoutComponent } from '../navigation-items/logout/logout.component';


@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent {
  constructor() {
    let user = localStorage.getItem('user');
      this.fullName = user && JSON.parse(user)[0].name;
      this.username = user && JSON.parse(user)[0].username;
  }

  fullName: string = '';
  username: string = '';
  avatarImageUrl: string = 'https://sugamphirke.com/Projects/emart/img/men1.png';
  navigationItems = [
    { title: 'Personal Information', component: PersonalInformationComponent },
    // { title: 'Validate Account', component: ValidateAccountComponent },
    { title: 'Shipping and Billing Addresses', component: AddressesComponent },
    { title: 'Your Coupons', component: YourCouponsComponent },
    { title: 'Preferences', component: PaymentMethodsComponent },
    { title: 'Order History', component: OrderHistoryComponent },
    { title: 'Wishlist', component: WishlistComponent },
    { title: 'Contact Us', component: null},
    { title: 'About Us', component: null},
    { title: 'Help', component: ToHelpComponent },
    { title: 'Logout', component: LogoutComponent }
  ];

  selectedItem: { title: string, component: any } | null = null;

  selectItem(item: { title: string, component: any }) {
    this.selectedItem = item;
  }
}
