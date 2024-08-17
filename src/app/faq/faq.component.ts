import { Component } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';


@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [MatExpansionModule, MatDividerModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {

}
