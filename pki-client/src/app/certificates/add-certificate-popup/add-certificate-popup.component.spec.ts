import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCertificatePopupComponent } from './add-certificate-popup.component';

describe('AddCertificatePopupComponent', () => {
  let component: AddCertificatePopupComponent;
  let fixture: ComponentFixture<AddCertificatePopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCertificatePopupComponent]
    });
    fixture = TestBed.createComponent(AddCertificatePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
