import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CertificatesService } from '../services/certificates.service';
import { Certificate } from '../models/certificate-request-model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-certificate-popup',
  templateUrl: './add-certificate-popup.component.html',
  styleUrls: ['./add-certificate-popup.component.css'],
})
export class AddCertificatePopupComponent {
  id: number | undefined = 0;
  myForm: FormGroup;
  declineReason: string = '';
  validator: boolean = false;
  select: string = '1';
  selectedItems: string[] = [];
  message: string = '';
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<AddCertificatePopupComponent>,
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
    if (this.myForm.valid) {
    } else {
      this.message = 'You did not fill in all the information';
    }
  }
  onGenerateTypeChange(event: any) {
    const selectedValue = event.value;
    this.select = selectedValue;
  }
  checkboxItems = [
    { name: 'ENCIPHER ONLY', checked: false },
    { name: 'CRL SIGN', checked: false },
    { name: 'KEY CERT SIGN', checked: false },
    { name: 'KEY AGREEMENT', checked: false },
    { name: 'DATA ENCIPHERMENT', checked: false },
    { name: 'KEY ENCIPHERMENT', checked: false },
    { name: 'NON REPUDIATION', checked: false },
    { name: 'DIGITAL SIGNATURE', checked: false },
    { name: 'DECIPHER ONLY', checked: false },
  ];

  onCheckboxChange(event: any, item: any) {
    if (event.target.checked) {
      this.selectedItems.push(item);
    } else {
      const index = this.selectedItems.indexOf(item);
      if (index !== -1) {
        this.selectedItems.splice(index, 1);
      }
    }
  }
}
