import { Component } from '@angular/core';

@Component({
  selector: 'app-scroll-top-button-feature',
  standalone: true,
  imports: [],
  templateUrl: './scroll-top-button-feature.component.html',
  styleUrl: './scroll-top-button-feature.component.css'
})
export class ScrollTopButtonFeatureComponent {
  constructor() {
  }
  scrollToTop() {
    window.scroll(0,0)
    console.log()
  }

}
