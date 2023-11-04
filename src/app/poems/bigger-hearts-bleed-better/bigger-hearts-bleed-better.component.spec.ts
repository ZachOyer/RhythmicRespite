import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiggerHeartsBleedBetterComponent } from './bigger-hearts-bleed-better.component';

describe('BiggerHeartsBleedBetterComponent', () => {
  let component: BiggerHeartsBleedBetterComponent;
  let fixture: ComponentFixture<BiggerHeartsBleedBetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiggerHeartsBleedBetterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiggerHeartsBleedBetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
