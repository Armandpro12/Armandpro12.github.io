import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    NgOptimizedImage
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

  scrollToElement(target: HTMLDivElement) {
    target.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}
