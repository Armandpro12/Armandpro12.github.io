import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from "./header/navbar/navbar.component";
import {
  ScrollTopButtonFeatureComponent
} from "./features/scroll-top-button-feature/scroll-top-button-feature.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, ScrollTopButtonFeatureComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
  onScroll(event: any) {
    console.log("scroll")
  }
}
