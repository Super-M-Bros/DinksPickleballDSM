import { Component } from '@angular/core'

@Component({
    selector: 'app-memberships',
    standalone: true,
    imports: [],
    templateUrl: './memberships.component.html',
    styleUrl: './memberships.component.scss',
})
export class MembershipsComponent {
    showModal = false
    limited = false
    standard = false
    vip = false

    toggleModal = () => (this.showModal = !this.showModal)
    toggleLimited = () => (this.limited = !this.limited)
    toggleStandard = () => (this.standard = !this.standard)
    toggleVIP = () => (this.vip = !this.vip)
}
