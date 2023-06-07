import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubChildComponent1Component } from './sub-child-component1.component';

describe('SubChildComponent1Component', () => {
  let component: SubChildComponent1Component;
  let fixture: ComponentFixture<SubChildComponent1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubChildComponent1Component]
    });
    fixture = TestBed.createComponent(SubChildComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
