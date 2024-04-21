import { Component, OnInit } from '@angular/core';
import { PrimeIcons, TreeNode } from 'primeng/api';
import {
  Certificate,
  CertificateType,
} from '../models/certificate-request-model';
import { MatTableDataSource } from '@angular/material/table';
import { CertificatesService } from '../services/certificates.service';
import { Tree } from '../models/tree-model';
import { AddCertificatePopupComponent } from '../add-certificate-popup/add-certificate-popup.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-certificates-view',
  templateUrl: './certificates-view.component.html',
  styleUrls: ['./certificates-view.component.css'],
})
export class CertificatesViewComponent implements OnInit {
  files!: TreeNode[];
  selectedFiles!: any;
  dialogRef!: MatDialogRef<AddCertificatePopupComponent>;

  constructor(
    private certificatesService: CertificatesService,
    private matDialog: MatDialog
  ) {}
  data = [];
  ngOnInit() {
    // this.nodeService.getFiles().then((data) => (this.files = data));
    this.files = this.data;
    this.getData();
  }
  expandAll() {
    this.files.forEach((node) => {
      this.expandRecursive(node, true);
    });
  }

  collapseAll() {
    this.files.forEach((node) => {
      this.expandRecursive(node, false);
    });
  }
  add(): void {
    if (
      this.selectedFiles.type === CertificateType.INTERMEDIATE ||
      this.selectedFiles.type === CertificateType.ROOT
    ) {
      console.log(this.selectedFiles.type);
      this.dialogRef = this.matDialog.open(AddCertificatePopupComponent, {
        data: {},
      });
    } else {
      //  TODO:  dijalog za Root, smisli kako da se proveri selectedFiles
      console.log(this.selectedFiles);
    }
  }
  delete() {
    console.log(this.selectedFiles);
  }

  private expandRecursive(node: TreeNode, isExpand: boolean) {
    node.expanded = isExpand;
    if (node.children) {
      node.children.forEach((childNode) => {
        this.expandRecursive(childNode, isExpand);
      });
    }
  }

  getData(): void {
    this.certificatesService.getTree().subscribe({
      next: (data: Tree[]) => {
        this.files = this.mapTreeToData(data);
        console.log(data);
      },
      error: () => {
        console.log('Error!');
      },
    });
  }

  mapTreeToData(treeData: Tree[]): any[] {
    return treeData.map((node) => ({
      label: node.subject,
      icon: node.certificateType
        ? this.getIconFromCertificateType(node.certificateType)
        : '',
      children: node.children ? this.mapTreeToData(node.children) : null,
      alias: node.alias,
      type: node.certificateType,
    }));
  }

  getIconFromCertificateType(certificateType: CertificateType): any {
    if (certificateType === CertificateType.ROOT) {
      return PrimeIcons.SERVER;
    } else if (certificateType === CertificateType.INTERMEDIATE) {
      return PrimeIcons.ID_CARD;
    } else if (certificateType === CertificateType.END_ENTITY) {
      return PrimeIcons.IMAGE;
    }
  }
}
