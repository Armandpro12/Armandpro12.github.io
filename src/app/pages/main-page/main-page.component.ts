import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {KeyValuePipe, NgForOf, NgOptimizedImage} from "@angular/common";
import {MissionsPageComponent} from "../missions-page/missions-page.component";
import {
  ScrollTopButtonFeatureComponent
} from "../../features/scroll-top-button-feature/scroll-top-button-feature.component";
import {ExperiencesPageComponent} from "../experiences-page/experiences-page.component";

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
    ExperiencesPageComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  summaryElements = {
    "parcours": {
      "titre": "Parcours",
      "description": "Mon parcours académique",
      "url": "/parcours"
    },
    "experiences": {
      "titre": "Expériences",
      "description": "Mes expériences professionnelles et académiques",
      "url": "/experiences"
    },
    "CV": {
      "titre": "CV",
      "description": "Mon CV en format PDF que vous pouvez télécharger",
      "url": "/cv"
    },
  }
  scrollToElement(target: HTMLDivElement) {
    target.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
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

