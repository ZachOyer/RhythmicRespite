import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneTimeComponent } from './one-time.component';

describe('OneTimeComponent', () => {
  let component: OneTimeComponent;
  let fixture: ComponentFixture<OneTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneTimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
