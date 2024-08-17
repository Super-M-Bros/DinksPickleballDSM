import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MembershipsComponent } from './memberships/memberships.component';
import { BecomeASponsorComponent } from './become-a-sponsor/become-a-sponsor.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { InstructionComponent } from './instruction/instruction.component';
import { LeaguesAndTourneysComponent } from './leagues/leagues-and-tourneys.component';
import { FaqComponent } from './faq/faq.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'memberships', component: MembershipsComponent },
  { path: 'become-a-sponsor', component: BecomeASponsorComponent },
  { path: 'leagues-tournaments', component: LeaguesAndTourneysComponent },
  { path: 'instruction', component: InstructionComponent },
  { path: 'faq', component: FaqComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
