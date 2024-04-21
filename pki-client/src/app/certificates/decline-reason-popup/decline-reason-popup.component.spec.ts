import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclineReasonPopupComponent } from './decline-reason-popup.component';

describe('DeclineReasonPopupComponent', () => {
  let component: DeclineReasonPopupComponent;
  let fixture: ComponentFixture<DeclineReasonPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeclineReasonPopupComponent]
    });
    fixture = TestBed.createComponent(DeclineReasonPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
