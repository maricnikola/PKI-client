import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificateRequestsComponent } from './certificate-requests/certificate-requests.component';
import { CertificatesViewComponent } from './certificates-view/certificates-view.component';
import { LayoutModule } from '../layout/layout.module';
import { TreeModule } from 'primeng/tree';
import { ButtonModule } from 'primeng/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { DeclineReasonPopupComponent } from './decline-reason-popup/decline-reason-popup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCertificatePopupComponent } from './add-certificate-popup/add-certificate-popup.component';

@NgModule({
  declarations: [
    CertificateRequestsComponent,
    CertificatesViewComponent,
    DeclineReasonPopupComponent,
    AddCertificatePopupComponent,
  ],
  exports: [CertificatesViewComponent],
  imports: [
    CommonModule,
    LayoutModule,
    TreeModule,
    ButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class CertificatesModule {}
