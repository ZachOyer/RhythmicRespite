import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondPoemComponent } from './second-poem.component';

describe('SecondPoemComponent', () => {
  let component: SecondPoemComponent;
  let fixture: ComponentFixture<SecondPoemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondPoemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondPoemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
