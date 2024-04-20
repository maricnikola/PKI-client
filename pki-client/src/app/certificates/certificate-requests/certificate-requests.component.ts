import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { CertificatesService } from '../services/certificates.service';
import { Certificate } from '../models/certificate-request-model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {DialogService} from "primeng/dynamicdialog";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {DeclineReasonPopupComponent} from "../decline-reason-popup/decline-reason-popup.component";

@Component({
  selector: 'app-certificate-requests',
  templateUrl: './certificate-requests.component.html',
  styleUrls: ['./certificate-requests.component.css']
})
export class CertificateRequestsComponent implements AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  certificateRequests: Certificate[] = [];
  dataSource!: MatTableDataSource<Certificate>;
  displayedColumns: string[] = ['commonName', 'organization', 'email', 'country', 'actions'];
  pageSizeOptions: number[] = [5, 10, 20];
  dialogRef!: MatDialogRef<DeclineReasonPopupComponent>;
  constructor(private certificatesService: CertificatesService, private matDialog: MatDialog) {}

  ngAfterViewInit() {
    this.getCertificateRequests();
  }

  getCertificateRequests(): void {
    this.certificatesService.getCertificateRequests().subscribe({
      next: (result: Certificate[]) => {
        this.certificateRequests = result;
        this.dataSource = new MatTableDataSource<Certificate>(this.certificateRequests);
        this.dataSource.paginator = this.paginator;
      }
    });
  }

  openDialog(certificateRequestId: number | undefined): void {
    this.dialogRef = this.matDialog.open(DeclineReasonPopupComponent, {
      data:{
        id: certificateRequestId
      }
    });
  }

  acceptCertificateRequests(id: number | undefined): void {
    this.certificatesService.acceptCertificateRequest(id as number).subscribe({
      next: (result: Certificate) => {
        this.getCertificateRequests();
        console.log("Uspesno accept", result);
      }
    });
  }
}
