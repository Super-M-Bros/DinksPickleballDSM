import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-memberships',
  standalone: true,
  imports: [MatGridListModule, MatCardModule, MatButtonModule],
  templateUrl: './memberships.component.html',
  styleUrl: './memberships.component.scss'
})
export class MembershipsComponent {

}
