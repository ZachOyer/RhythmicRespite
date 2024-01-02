import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowDidWeGetHereComponent } from './how-did-we-get-here.component';

describe('HowDidWeGetHereComponent', () => {
  let component: HowDidWeGetHereComponent;
  let fixture: ComponentFixture<HowDidWeGetHereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowDidWeGetHereComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowDidWeGetHereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
