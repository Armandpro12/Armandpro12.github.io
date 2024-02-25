import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-scroll-top-button-feature',
  standalone: true,
  imports: [],
  templateUrl: './scroll-top-button-feature.component.html',
  styleUrl: './scroll-top-button-feature.component.css'
})
export class ScrollTopButtonFeatureComponent {
  isHidden = true;
  @HostListener('window:scroll', ['$event'])
  detectScroll(event: any) {
    console.log(window.scrollY)
    if (window.scrollY > 300) {
      this.isHidden = false;
    } else {
      this.isHidden = true;
    }
  }
  constructor() {
  }
  scrollToTop() {
    window.scroll(0,0)
    console.log()
  }

}
