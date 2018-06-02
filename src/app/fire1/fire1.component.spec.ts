import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fire1Component } from './fire1.component';

describe('Fire1Component', () => {
  let component: Fire1Component;
  let fixture: ComponentFixture<Fire1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fire1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fire1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
