import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRootPopupComponent } from './add-root-popup.component';

describe('AddRootPopupComponent', () => {
  let component: AddRootPopupComponent;
  let fixture: ComponentFixture<AddRootPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddRootPopupComponent]
    });
    fixture = TestBed.createComponent(AddRootPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
