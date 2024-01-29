import { Routes } from '@angular/router';
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {MissionsPageComponent} from "./pages/missions-page/missions-page.component";
import {NavbarComponent} from "./header/navbar/navbar.component";
import {ProjetsPageComponent} from "./pages/projets-page/projets-page.component";

export const routes: Routes = [
  { path: 'home', component: MainPageComponent},
  { path: '', component: MainPageComponent},
  {path: 'missions', component: MissionsPageComponent},
  { path: 'navbar', component: NavbarComponent},
  { path: 'projets', component: ProjetsPageComponent}
];
