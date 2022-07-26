import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdgarAllenPoemComponent } from './edgar-allen-poem.component';

describe('EdgarAllenPoemComponent', () => {
  let component: EdgarAllenPoemComponent;
  let fixture: ComponentFixture<EdgarAllenPoemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdgarAllenPoemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdgarAllenPoemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
