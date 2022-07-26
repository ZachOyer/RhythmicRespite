import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyGurlComponent } from './baby-gurl.component';

describe('BabyGurlComponent', () => {
  let component: BabyGurlComponent;
  let fixture: ComponentFixture<BabyGurlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BabyGurlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BabyGurlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
