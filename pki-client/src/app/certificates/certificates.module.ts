import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificateRequestsComponent } from './certificate-requests/certificate-requests.component';
import { CertificatesViewComponent } from './certificates-view/certificates-view.component';
import {LayoutModule} from "../layout/layout.module";
import {TreeModule} from "primeng/tree";
import {ButtonModule} from "primeng/button";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatButtonModule} from "@angular/material/button";
import { DeclineReasonPopupComponent } from './decline-reason-popup/decline-reason-popup.component';
import {FormsModule} from "@angular/forms";



@NgModule({
    declarations: [
        CertificateRequestsComponent,
        CertificatesViewComponent,
        DeclineReasonPopupComponent
    ],
    exports: [
        CertificatesViewComponent
    ],
    imports: [
        CommonModule,
        LayoutModule,
        TreeModule,
        ButtonModule,
        MatTableModule,
        MatPaginatorModule,
        MatButtonModule,
        FormsModule
    ]
})
export class CertificatesModule { }
