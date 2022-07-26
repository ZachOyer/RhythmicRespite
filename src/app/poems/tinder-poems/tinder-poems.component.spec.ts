import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TinderPoemsComponent } from './tinder-poems.component';

describe('TinderPoemsComponent', () => {
  let component: TinderPoemsComponent;
  let fixture: ComponentFixture<TinderPoemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TinderPoemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TinderPoemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
