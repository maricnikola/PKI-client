import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificatesViewComponent } from './certificates-view.component';

describe('CertificatesViewComponent', () => {
  let component: CertificatesViewComponent;
  let fixture: ComponentFixture<CertificatesViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CertificatesViewComponent]
    });
    fixture = TestBed.createComponent(CertificatesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
