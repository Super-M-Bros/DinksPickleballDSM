import { Component } from '@angular/core'
import { RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router'

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, RouterModule, RouterLinkActive],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'dinks_pickleball_dsm'
    menu = false
    toggleMenu = () => {
        this.menu = !this.menu
    }
}
