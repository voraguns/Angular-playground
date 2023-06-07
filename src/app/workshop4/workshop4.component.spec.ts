import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Workshop4Component } from './workshop4.component';

describe('Workshop4Component', () => {
  let component: Workshop4Component;
  let fixture: ComponentFixture<Workshop4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Workshop4Component]
    });
    fixture = TestBed.createComponent(Workshop4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
