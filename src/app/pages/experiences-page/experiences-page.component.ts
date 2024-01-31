import { Component } from '@angular/core';
import {KeyValuePipe, NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-experiences-page',
  standalone: true,
  imports: [
    KeyValuePipe,
    NgForOf,
    RouterLink
  ],
  templateUrl: './experiences-page.component.html',
  styleUrl: './experiences-page.component.css'
})
export class ExperiencesPageComponent {

}
