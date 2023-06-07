import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextShowComponent } from './text-show.component';

describe('TextShowComponent', () => {
  let component: TextShowComponent;
  let fixture: ComponentFixture<TextShowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextShowComponent]
    });
    fixture = TestBed.createComponent(TextShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
