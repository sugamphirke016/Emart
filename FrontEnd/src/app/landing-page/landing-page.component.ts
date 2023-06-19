import { Component, OnInit  } from '@angular/core';
import { product } from 'src/data-type';
import { ProductService } from '../services/product.service';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

interface carouselImage {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit  {
  ngOnInit(): void {
    this.product.trendyProducts().subscribe((data) => {
      this.trendyProducts = data;
    })

    const myData: string = localStorage.getItem('myData') as string;
    console.log(myData);

    // window.scroll(0,10000);

  }

  constructor(private product: ProductService, private dialogRef: MatDialog, private route: ActivatedRoute) { }

  showMoreProducts() {
    var hidden_rows = document.getElementsByClassName("hidden");
    var loadMoreButton = document.getElementById("btn_load-more");
    var isPresent = false;

    for (var i = 0; i < hidden_rows.length; i++) {
      var row = hidden_rows[i] as HTMLDivElement;

      if (row.style.display === "none") {
        isPresent = true;
        row.style.display = "flex";
        break;
      }
    }

    if (loadMoreButton && Array.from(hidden_rows).every(row => (row as HTMLDivElement).style.display !== "none")) {
      (loadMoreButton as HTMLElement).style.display = "none";
    }

  }

  url1: string = "../../assets/Photos/Products/product1.1.jpg";
  changeImageCard1(event: any) {
    this.url1 = event.target.src;
  }

  url2: string = "../../assets/Photos/Products/product2.1.jpg";
  changeImageCard2(event: any) {
    this.url2 = event.target.src;
  }

  url3: string = "../../assets/Photos/Products/product3.1.jpg";
  changeImageCard3(event: any) {
    this.url3 = event.target.src;
  }

  url4: string = "../../assets/Photos/Products/product4.1.jpg";
  changeImageCard4(event: any) {
    this.url4 = event.target.src;
  }

  url5: string = "../../assets/Photos/Products/product9.1.jpg";
  changeImageCard5(event: any) {
    this.url5 = event.target.src;
  }
  url6: string = "../../assets/Photos/Products/product6.1.jpg";
  changeImageCard6(event: any) {
    this.url6 = event.target.src;
  }
  url7: string = "../../assets/Photos/Products/product7.1.jpg";
  changeImageCard7(event: any) {
    this.url7 = event.target.src;
  }
  url8: string = "../../assets/Photos/Products/product8.1.jpg";
  changeImageCard8(event: any) {
    this.url8 = event.target.src;
  }
  // url9: string = "../../assets/Photos/Products/product10.1.jpg";
  // changeImageCard9(event:any){
  //   this.url9 = event.target.src;
  // }
  url10: string = "../../assets/Photos/Products/product10.1.jpg";
  changeImageCard10(event: any) {
    this.url10 = event.target.src;
  }
  url11: string = "../../assets/Photos/Products/product11.1.png";
  changeImageCard11(event: any) {
    this.url11 = event.target.src;
  }
  url12: string = "../../assets/Photos/Products/product12.1.jpg";
  changeImageCard12(event: any) {
    this.url12 = event.target.src;
  }
  url13: string = "../../assets/Photos/Products/product13.1.jpg";
  changeImageCard13(event: any) {
    this.url13 = event.target.src;
  }
  url14: string = "../../assets/Photos/Products/product14.1.jpg";
  changeImageCard14(event: any) {
    this.url14 = event.target.src;
  }
  url15: string = "../../assets/Photos/Products/product15.1.jpg";
  changeImageCard15(event: any) {
    this.url15 = event.target.src;
  }
  url16: string = "../../assets/Photos/Products/product16.1.jpg";
  changeImageCard16(event: any) {
    this.url16 = event.target.src;
  }
  url17: string = "../../assets/Photos/Products/product17.1.jpg";
  changeImageCard17(event: any) {
    this.url17 = event.target.src;
  }
  url18: string = "../../assets/Photos/Products/product18.1.jpg";
  changeImageCard18(event: any) {
    this.url18 = event.target.src;
  }
  url19: string = "../../assets/Photos/Products/product19.1.jpg";
  changeImageCard19(event: any) {
    this.url19 = event.target.src;
  }
  url20: string = "../../assets/Photos/Products/product20.1.jpg";
  changeImageCard20(event: any) {
    this.url20 = event.target.src;
  }
  url21: string = "../../assets/Photos/Products/product21.1.jpg";
  changeImageCard21(event: any) {
    this.url21 = event.target.src;
  }
  url22: string = "../../assets/Photos/Products/product22.1.jpg";
  changeImageCard22(event: any) {
    this.url22 = event.target.src;
  }
  url23: string = "../../assets/Photos/Products/product23.1.jpg";
  changeImageCard23(event: any) {
    this.url23 = event.target.src;
  }
  url24: string = "../../assets/Photos/Products/product24.1.jpg";
  changeImageCard24(event: any) {
    this.url24 = event.target.src;
  }
  url25: string = "../../assets/Photos/Products/product25.1.jpg";
  changeImageCard25(event: any) {
    this.url25 = event.target.src;
  }

  trendyProducts: undefined | product[];
  myData: string = '';
  
  storeScrollPosition(): void {
    sessionStorage.setItem('scrollPosition', String(window.scrollY));
    console.log("scroll position has been set: ", String(window.scrollY));
  }

}
