import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakEnglishComponent } from './speak-english.component';

describe('SpeakEnglishComponent', () => {
  let component: SpeakEnglishComponent;
  let fixture: ComponentFixture<SpeakEnglishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeakEnglishComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpeakEnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
