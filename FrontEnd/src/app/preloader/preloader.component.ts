import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.scss']
})
export class PreloaderComponent implements OnInit {
  preloaderImgSrc = 'assets/Photos/preloader_logo.gif';
  preloaderImgStyle = 'height: 150px; width: 150px;';

  ngOnInit() {
    window.addEventListener('load', () => {
      setTimeout(() => {
        this.preloaderImgSrc = 'assets/Photos/anime.gif';
        this.preloaderImgStyle = 'height: 270px; width: 270px;';
      }, 2000);

      setTimeout(() => {
        const preloader = document.querySelector('.preloader') as HTMLElement; // Cast to HTMLElement
        preloader.style.display = 'none';
      }, 5000);
    });
  }
}
