import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChristmasRapComponent } from './christmas-rap.component';

describe('ChristmasRapComponent', () => {
  let component: ChristmasRapComponent;
  let fixture: ComponentFixture<ChristmasRapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChristmasRapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChristmasRapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
