import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";
import {MissionsPageComponent} from "../missions-page/missions-page.component";
import {
  ScrollTopButtonFeatureComponent
} from "../../features/scroll-top-button-feature/scroll-top-button-feature.component";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    NgOptimizedImage,
    MissionsPageComponent,
    ScrollTopButtonFeatureComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

  scrollToElement(target: HTMLDivElement) {
    target.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
  }
}
