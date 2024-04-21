import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CertificatesService} from "../services/certificates.service";
import {
  Certificate,
  CertificateRequestStatus,
  CertificateType,
  Extensions,
  KeyUsage
} from "../models/certificate-request-model";

@Component({
  selector: 'app-add-root-popup',
  templateUrl: './add-root-popup.component.html',
  styleUrls: ['./add-root-popup.component.css']
})
export class AddRootPopupComponent {
  id: number | undefined = 0;
  myForm: FormGroup;
  validator: boolean = false;
  select: string = '1';
  selectedItems: KeyUsage[] = [];
  message: string = '';
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<AddRootPopupComponent>,
    private certificatesService: CertificatesService,
    private fb: FormBuilder
  ) {
    this.id = data.id;
    this.myForm = this.fb.group({
      commonName: ['', Validators.required],
      organization: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      country: ['', Validators.required],
      selectedGenerateType: ['1'],
      SAN: [''],
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
  submitForm() {
    console.log(this.selectedItems);
    if (this.myForm.valid) {
      var extensions: Extensions = {
        keyUsages: this.selectedItems
      }
      var certificate: Certificate = {
        commonName: this.myForm.value.commonName,
        organization: this.myForm.value.organization,
        email: this.myForm.value.email,
        country: this.myForm.value.country,
        certificateType: CertificateType.ROOT,
        certificateRequestStatus: CertificateRequestStatus.PENDING,
        extensionsDTO: extensions
      }
      console.log("OVO: ", certificate);
      this.certificatesService.addRootCertificate(certificate).subscribe({
        next: (result: Certificate) => {
          console.log(result);
          this.closeDialog();
          window.location.reload();
        },
        error: (error) => {
          console.error("Error :", error);
        }
      });
    } else {
      this.message = 'You did not fill in all the information';
    }
  }

  checkboxItems = [
    { name: KeyUsage.ENCIPHER_ONLY, checked: false },
    { name: KeyUsage.CRL_SIGN, checked: false },
    { name: KeyUsage.KEY_CERT_SIGN, checked: false },
    { name: KeyUsage.KEY_AGREEMENT, checked: false },
    { name: KeyUsage.DATA_ENCIPHERMENT, checked: false },
    { name: KeyUsage.KEY_ENCIPHERMENT, checked: false },
    { name: KeyUsage.NON_REPUDIATION, checked: false },
    { name: KeyUsage.DIGITAL_SIGNATURE, checked: false },
    { name: KeyUsage.DECIPHER_ONLY, checked: false },
  ];

  onCheckboxChange(event: any, item: any) {
    if (event.target.checked) {
      this.selectedItems.push(item.name);
    } else {
      const index = this.selectedItems.indexOf(item.name);
      if (index !== -1) {
        this.selectedItems.splice(index, 1);
      }
    }
  }
}
