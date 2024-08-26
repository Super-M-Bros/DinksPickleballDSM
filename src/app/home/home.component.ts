import { Component } from '@angular/core';
import { RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router'


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLinkActive, RouterModule, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  scrollTo(element: string) {
    // scroll to the element named arg0
    document.getElementById(element)?.scrollIntoView({ behavior: 'smooth' });
  }

}
