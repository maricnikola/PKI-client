import {Component, OnInit} from '@angular/core';
import {PrimeIcons, TreeNode} from "primeng/api";

@Component({
  selector: 'app-certificates-view',
  templateUrl: './certificates-view.component.html',
  styleUrls: ['./certificates-view.component.css']
})

export class CertificatesViewComponent implements OnInit{
  files!: TreeNode[];
  selectedFiles!: any;

  // constructor(private nodeService: NodeService) {}
  constructor() {}
  data = [
      {
        label: 'Folder 1',
        icon: PrimeIcons.SERVER,
        children: [
          {
            label: 'Subfolder 1.1',
            icon: PrimeIcons.ID_CARD,
          },
          {
            label: 'Subfolder 1.2',
            icon: PrimeIcons.ID_CARD,
            children: [
              {
                label: 'Subsubfolder 1.2.1',
                icon: PrimeIcons.IMAGE,
              },
              {
                label: 'Subsubfolder 1.2.2',
                icon: PrimeIcons.IMAGE,
              }
            ]
          },
          {
            label: 'Subfolder 1.3',
            icon: PrimeIcons.ID_CARD,
          }
        ]
      },
{
  label: 'Folder 2',
  icon: PrimeIcons.SERVER,
  children: [
    {
      label: 'Subfolder 2.1',
      icon: PrimeIcons.ID_CARD,
    },
    {
      label: 'Subfolder 2.2',
      icon: PrimeIcons.ID_CARD,
    },
    {
      label: 'Subfolder 2.3',
      icon: PrimeIcons.ID_CARD,
    }
  ]
},
{
  label: 'Folder 3',
  icon: PrimeIcons.SERVER,
}
];
  ngOnInit() {
    // this.nodeService.getFiles().then((data) => (this.files = data));
    this.files = this.data;
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

  private expandRecursive(node: TreeNode, isExpand: boolean) {
    node.expanded = isExpand;
    if (node.children) {
      node.children.forEach((childNode) => {
        this.expandRecursive(childNode, isExpand);
      });
    }
  }
}
