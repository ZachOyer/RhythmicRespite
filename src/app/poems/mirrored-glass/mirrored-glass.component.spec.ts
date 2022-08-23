import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MirroredGlassComponent } from './mirrored-glass.component';

describe('MirroredGlassComponent', () => {
  let component: MirroredGlassComponent;
  let fixture: ComponentFixture<MirroredGlassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MirroredGlassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MirroredGlassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
