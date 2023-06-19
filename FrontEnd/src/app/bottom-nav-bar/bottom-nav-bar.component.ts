import { Component } from '@angular/core';

@Component({
  selector: 'app-bottom-nav-bar',
  templateUrl: './bottom-nav-bar.component.html',
  styleUrls: ['./bottom-nav-bar.component.scss']
})
export class BottomNavBarComponent {
  FacebookIconSrc: string = "assets/Photos/facebook_logo.png";
  InstagramIconSrc: string = "assets/Photos/instagram_logo.png";
  TwitterIconSrc: string = "assets/Photos/twitter_logo.png";
  YoutubeIconSrc: string = "assets/Photos/yt_filled.png";

  onFacebookIconHover(isHovering: boolean): void {
    this.FacebookIconSrc = isHovering ? "assets/Photos/facebook_logo_white.png" : "assets/Photos/facebook_logo.png";
  }
  onInstagramIconHover(isHovering: boolean): void {
    this.InstagramIconSrc = isHovering ? "assets/Photos/instagram_logo_white.png" : "assets/Photos/instagram_logo.png";
  }
  onTwitterIconHover(isHovering: boolean): void {
    this.TwitterIconSrc = isHovering ? "assets/Photos/twitter_logo_white.png" : "assets/Photos/twitter_logo.png";
  }
  onYoutubeIconHover(isHovering: boolean): void {
    this.YoutubeIconSrc = isHovering ? "assets/Photos/yt_idle.png" : "assets/Photos/yt_filled.png";
  }
}
