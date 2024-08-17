import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeASponsorComponent } from './become-asponsor.component';

describe('BecomeASponsorComponent', () => {
  let component: BecomeASponsorComponent;
  let fixture: ComponentFixture<BecomeASponsorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BecomeASponsorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BecomeASponsorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
