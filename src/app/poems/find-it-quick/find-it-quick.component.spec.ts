import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindItQuickComponent } from './find-it-quick.component';

describe('FindItQuickComponent', () => {
  let component: FindItQuickComponent;
  let fixture: ComponentFixture<FindItQuickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindItQuickComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindItQuickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
