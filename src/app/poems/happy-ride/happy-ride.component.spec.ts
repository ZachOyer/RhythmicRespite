import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HappyRideComponent } from './happy-ride.component';

describe('HappyRideComponent', () => {
  let component: HappyRideComponent;
  let fixture: ComponentFixture<HappyRideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HappyRideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HappyRideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
