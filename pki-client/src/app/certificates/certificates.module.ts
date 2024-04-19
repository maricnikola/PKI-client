import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificateRequestsComponent } from './certificate-requests/certificate-requests.component';
import { CertificatesViewComponent } from './certificates-view/certificates-view.component';



@NgModule({
  declarations: [
    CertificateRequestsComponent,
    CertificatesViewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CertificatesModule { }
