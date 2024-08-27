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
    // Get the height of the header
    const navHeight = document.querySelector('header')?.clientHeight;

    // Get the element to scroll to
    const elementToScroll = document.getElementById(element);

    if (elementToScroll && navHeight) {
      // Get the top position of the element to scroll to, minus the height of the header, minus the margin of the element
      const scrollPosition = elementToScroll.offsetTop - navHeight - parseInt(getComputedStyle(elementToScroll).marginTop);
      window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
    }
  }

}
