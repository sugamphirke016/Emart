import { Component } from '@angular/core';
import { ValidateAccountComponent } from '../navigation-items/validate-account/validate-account.component';
import { PersonalInformationComponent } from '../navigation-items/personal-information/personal-information.component';
import { LoginCredentialsComponent } from '../navigation-items/login-credentials/login-credentials.component';
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
  fullName: string = 'Sugam Phirke';
  username: string = 'sugam_16';
  avatarImageUrl: string = 'https://sugamphirke.com/Projects/emart/img/men1.png';
  navigationItems = [
    { title: 'Personal Information', component: PersonalInformationComponent },
    { title: 'Validate Account', component: ValidateAccountComponent },
    { title: 'Login Credentials', component: LoginCredentialsComponent },
    { title: 'Shipping and Billing Addresses', component: AddressesComponent },
    { title: 'Your Coupons', component: YourCouponsComponent },
    { title: 'Payment Methods', component: PaymentMethodsComponent },
    { title: 'Order History', component: OrderHistoryComponent },
    { title: 'Wishlist', component: WishlistComponent },
    { title: 'Help', component: ToHelpComponent },
    { title: 'Logout', component: LogoutComponent }
  ];

  selectedItem: { title: string, component: any } | null = null;

  selectItem(item: { title: string, component: any }) {
    this.selectedItem = item;
  }
}
