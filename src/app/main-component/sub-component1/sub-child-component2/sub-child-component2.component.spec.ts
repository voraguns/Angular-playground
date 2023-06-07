import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubChildComponent2Component } from './sub-child-component2.component';

describe('SubChildComponent2Component', () => {
  let component: SubChildComponent2Component;
  let fixture: ComponentFixture<SubChildComponent2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubChildComponent2Component]
    });
    fixture = TestBed.createComponent(SubChildComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
