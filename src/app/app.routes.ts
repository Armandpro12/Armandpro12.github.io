import { Routes } from '@angular/router';
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {MissionsPageComponent} from "./pages/missions-page/missions-page.component";
import {NavbarComponent} from "./header/navbar/navbar.component";
import {ProjetsPageComponent} from "./pages/projets-page/projets-page.component";
import {
  ScrollTopButtonFeatureComponent
} from "./features/scroll-top-button-feature/scroll-top-button-feature.component";
import {ParcoursPageComponent} from "./pages/parcours-page/parcours-page.component";
import {CvPageComponent} from "./pages/cv-page/cv-page.component";
import {ExperiencesPageComponent} from "./pages/experiences-page/experiences-page.component";

export const routes: Routes = [
  { path: 'home', component: MainPageComponent},
  { path: '', component: MainPageComponent},
  {path: 'missions', component: MissionsPageComponent},
  { path: 'navbar', component: NavbarComponent},
  { path: 'projets', component: ProjetsPageComponent},
  { path: 'scroll-top-button', component: ScrollTopButtonFeatureComponent},
  { path: 'parcours', component: ParcoursPageComponent},
  { path: 'cv', component: CvPageComponent},
  { path: 'experiences', component: ExperiencesPageComponent}
];
