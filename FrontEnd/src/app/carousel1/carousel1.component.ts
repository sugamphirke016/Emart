import { Component, Input, OnInit } from '@angular/core';

interface carouselImage {
  imageSrc: string;
  imageAlt: string;
}
@Component({
  selector: 'app-carousel1',
  templateUrl: './carousel1.component.html',
  styleUrls: ['./carousel1.component.scss']
})
export class Carousel1Component implements OnInit{
  // @Input() images: carouselImage[] = [];
  images = [
    {
      imageSrc:
      'https://sugamphirke.com/Projects/emart/img/e-Mart.gif',
      imageAlt: 'gif1',
    },
    {
      imageSrc:
      'https://sugamphirke.com/Projects/emart/img/design3_v.gif',
      imageAlt: 'gif2',
    },
    {
      imageSrc:
      'https://sugamphirke.com/Projects/emart/img/design4_v.gif',
      imageAlt: 'gif3',
    },
    {
      imageSrc:'https://sugamphirke.com/Projects/emart/img/design1_v.gif',
      imageAlt: 'gif4',
    },
    {
      imageSrc:
      'https://sugamphirke.com/Projects/emart/img/design2_v.gif',
      imageAlt: 'gif5',
    },
    {
      imageSrc:
      'https://sugamphirke.com/Projects/emart/img/design5.png',
      imageAlt: 'design5',
    }
  ]
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlide = false;
  @Input() slideInterval = 4000;

  selectedIndex = 0;

  ngOnInit(): void {
      if(this.autoSlide) {
        this.autoSlideImages();
      }
  }

  autoSlideImages(): void {
    setInterval(()=> {
      this.onNextClick();
    },this.slideInterval);
  }

  // This will set the index of image on the dots/indicators.
  selectImage(index: number): void{
    this.selectedIndex = index;
  }

  onPrevClick(): void {
    if(this.selectedIndex === 0) {
      this.selectedIndex = this.images.length - 1;
    }
    else {
      this.selectedIndex--;
    }
  }

  onNextClick(): void{
    if(this.selectedIndex === this.images.length - 1) {
      this.selectedIndex = 0;
    }
    else {
      this.selectedIndex++;
    }
  }
}
