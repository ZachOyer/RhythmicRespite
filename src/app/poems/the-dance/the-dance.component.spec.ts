import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheDanceComponent } from './the-dance.component';

describe('TheDanceComponent', () => {
  let component: TheDanceComponent;
  let fixture: ComponentFixture<TheDanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheDanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheDanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
