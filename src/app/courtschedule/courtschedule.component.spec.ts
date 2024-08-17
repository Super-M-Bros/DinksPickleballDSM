import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourtscheduleComponent } from './courtschedule.component';

describe('CourtscheduleComponent', () => {
  let component: CourtscheduleComponent;
  let fixture: ComponentFixture<CourtscheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourtscheduleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourtscheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
