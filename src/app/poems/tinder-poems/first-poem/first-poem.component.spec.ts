import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstPoemComponent } from './first-poem.component';

describe('FirstPoemComponent', () => {
  let component: FirstPoemComponent;
  let fixture: ComponentFixture<FirstPoemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstPoemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstPoemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
