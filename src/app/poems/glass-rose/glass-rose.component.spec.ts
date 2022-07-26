import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlassRoseComponent } from './glass-rose.component';

describe('GlassRoseComponent', () => {
  let component: GlassRoseComponent;
  let fixture: ComponentFixture<GlassRoseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlassRoseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlassRoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
