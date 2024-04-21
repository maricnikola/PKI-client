import {Component, Inject} from '@angular/core';
import {CertificatesService} from "../services/certificates.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Certificate} from "../models/certificate-request-model";

@Component({
  selector: 'app-decline-reason-popup',
  templateUrl: './decline-reason-popup.component.html',
  styleUrls: ['./decline-reason-popup.component.css']
})
export class DeclineReasonPopupComponent {
  id: number | undefined = 0;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<DeclineReasonPopupComponent>,
              private certificatesService: CertificatesService) {
    this.id = data.id;
  }

  declineReason: string = "";
  validator: boolean = false;

  closeDialog(): void {
    this.dialogRef.close();
  }

  declineCertificateRequest(): void{
    this.validator = false;
    if(this.declineReason.length < 10){
      this.validator = true;
      return;
    }

    this.certificatesService.declineCertificateRequest(this.id as number, this.declineReason).subscribe({
      next:(result: Certificate) => {
        console.log("Uspesno sam decline uradio", result);
        window.location.reload()
      }
    })

    this.dialogRef.close(true);
  }
}
