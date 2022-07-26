import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrMyDadComponent } from './ur-my-dad.component';

describe('UrMyDadComponent', () => {
  let component: UrMyDadComponent;
  let fixture: ComponentFixture<UrMyDadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrMyDadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UrMyDadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
