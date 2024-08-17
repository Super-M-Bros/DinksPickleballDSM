import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaguesAndTournamentsComponent } from './leagues-and-tourneys.component';

describe('LeaguesComponent', () => {
  let component: LeaguesAndTournamentsComponent;
  let fixture: ComponentFixture<LeaguesAndTournamentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeaguesAndTournamentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaguesAndTournamentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
