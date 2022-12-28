import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdPoemComponent } from './third-poem.component';

describe('ThirdPoemComponent', () => {
  let component: ThirdPoemComponent;
  let fixture: ComponentFixture<ThirdPoemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdPoemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdPoemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
