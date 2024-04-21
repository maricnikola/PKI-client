import { Component, HostListener, OnInit } from '@angular/core';
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
import {AddRootPopupComponent} from "../add-root-popup/add-root-popup.component";

@Component({
  selector: 'app-certificates-view',
  templateUrl: './certificates-view.component.html',
  styleUrls: ['./certificates-view.component.css'],
})
export class CertificatesViewComponent implements OnInit {
  files!: TreeNode[];
  selectedFile!: any;
  dialogRef!: MatDialogRef<AddCertificatePopupComponent>;
  dialogRootRef!: MatDialogRef<AddRootPopupComponent>;

  constructor(
    private certificatesService: CertificatesService,
    private matDialog: MatDialog
  ) {}
  data = [];
  ngOnInit() {
    // this.nodeService.getFiles().then((data) => (this.files = data));
    this.files = this.data;
    this.selectedFile = null;
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
    if(this.selectedFile == null){
      this.dialogRootRef = this.matDialog.open(AddRootPopupComponent, {
        data: {},
      });
    }
    else  {
      this.dialogRef = this.matDialog.open(AddCertificatePopupComponent, {
        data: {},
      });
    }
  }
  delete() {
    console.log(this.selectedFile);
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

  // mapTreeToData(treeData: Tree[]): any[] {
  //   return treeData.map(node => {
  //     const parsedData = this.parseInputString(node.subject);
  //     console.log(parsedData);
  //
  //     return {
  //       // commonName: parsedData.commonName || '',
  //       // organization: parsedData.organization || '',
  //       // email: parsedData.email || '',
  //       // country: parsedData.country || '',
  //       // certificateType: parsedData.certificateType || '',
  //       label: node.subject,
  //       icon: node.certificateType ? this.getIconFromCertificateType(node.certificateType) : '',
  //       children: node.children ? this.mapTreeToData(node.children) : null,
  //     };
  //   });
  // }
  parseInputString(inputString: string | undefined): any {
    if (!inputString) {
      return {}; // Ako inputString nije definiran, vraćamo prazan objekt
    }

    const keyValuePairs = inputString.split(','); // Prvo parsiranje po zarezima
    const parsedData: any = {};

    keyValuePairs.forEach((pair) => {
      const [key, value] = pair.split('='); // Zatim parsiranje po jednakostima
      if (key && value) {
        // Provjera da li su key i value definirani
        parsedData[key.trim()] = value.trim();
      }
    });

    return parsedData;
  }

  mapTreeToData(treeData: Tree[]): any[] {
    return treeData.map((node) => {
      const parsedData = this.parseInputString(node.subject);

      return {
        commonName: parsedData.commonName || '',
        organization: parsedData.organization || '',
        email: parsedData.email || '',
        country: parsedData.country || '',
        certificateType: parsedData.certificateType || '',
        label: parsedData.commonName || '',
        icon: node.certificateType
          ? this.getIconFromCertificateType(node.certificateType)
          : '',
        children: node.children ? this.mapTreeToData(node.children) : null,
      };
    });
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

  @HostListener('document:click', ['$event'])
  handleDocumentClick(event: MouseEvent) {
    const clickedElement = event.target as HTMLElement;

    const treeElement = document.querySelector('.p-tree');
    const addButton = document.querySelector('.add-button');
    const deleteButton = document.querySelector('.delete-button');

    if (!treeElement?.contains(clickedElement) && !addButton?.contains(clickedElement) && !deleteButton?.contains(clickedElement)) {
      this.selectedFile = null;
    }
  }

}
