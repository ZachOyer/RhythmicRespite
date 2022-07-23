import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoveLifeLiteratureComponent } from './love-life-literature.component';

describe('LoveLifeLiteratureComponent', () => {
  let component: LoveLifeLiteratureComponent;
  let fixture: ComponentFixture<LoveLifeLiteratureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoveLifeLiteratureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoveLifeLiteratureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
