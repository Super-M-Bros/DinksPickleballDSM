import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router'

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, RouterModule, RouterLinkActive],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'dinks_pickleball_dsm'
    mobileMenuHidden = true

    toggleMenu = (state?: boolean) => {
        this.mobileMenuHidden = state ?? !this.mobileMenuHidden
    }

    scrollTo(element: string) {
        // scroll to the element named arg0
        document.getElementById(element)?.scrollIntoView({ behavior: 'smooth' });
    }
}
