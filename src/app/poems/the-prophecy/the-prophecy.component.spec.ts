import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheProphecyComponent } from './the-prophecy.component';

describe('TheProphecyComponent', () => {
  let component: TheProphecyComponent;
  let fixture: ComponentFixture<TheProphecyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheProphecyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheProphecyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
