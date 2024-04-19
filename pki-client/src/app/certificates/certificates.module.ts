import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificateRequestsComponent } from './certificate-requests/certificate-requests.component';
import { CertificatesViewComponent } from './certificates-view/certificates-view.component';
import {LayoutModule} from "../layout/layout.module";
import {TreeModule} from "primeng/tree";
import {ButtonModule} from "primeng/button";



@NgModule({
    declarations: [
        CertificateRequestsComponent,
        CertificatesViewComponent
    ],
    exports: [
        CertificatesViewComponent
    ],
    imports: [
        CommonModule,
        LayoutModule,
        TreeModule,
        ButtonModule
    ]
})
export class CertificatesModule { }
