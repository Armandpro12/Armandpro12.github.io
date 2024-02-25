import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {KeyValuePipe, NgForOf, NgOptimizedImage} from "@angular/common";
import {MissionsPageComponent} from "../missions-page/missions-page.component";
import {
  ScrollTopButtonFeatureComponent
} from "../../features/scroll-top-button-feature/scroll-top-button-feature.component";
import {ExperiencesPageComponent} from "../experiences-page/experiences-page.component";
import {CvPageComponent} from "../cv-page/cv-page.component";
import {ParcoursPageComponent} from "../parcours-page/parcours-page.component";
@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    NgOptimizedImage,
    MissionsPageComponent,
    ScrollTopButtonFeatureComponent,
    KeyValuePipe,
    NgForOf,
    ExperiencesPageComponent,
    CvPageComponent,
    ParcoursPageComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  @ViewChild("CV") cv: any;
  @ViewChild("parcours") parcours: any;
  @ViewChild("experiences") experiences: any;
  scrollToElement(target: HTMLDivElement) {
      window.scrollTo({
        behavior: 'smooth',
        top:
          target.getBoundingClientRect().top -
          document.body.getBoundingClientRect().top -
          100,
      })
    }
}

// "missions": {
//   "titre": "Missions d'entreprise",
//   "description": "Les missions effectuées dans le cadre de l'entreprise",
//   "url": "/missions"
// },
// "projets": {
//   "titre": "Projets académique",
//   "description": "Les projets/SAÉ effectués dans le cadre de l'école/université",
//   "url": "/projets"
// },

