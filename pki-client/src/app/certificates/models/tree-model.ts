import { CertificateType } from './certificate-request-model';
import { PrimeIcons, TreeNode } from 'primeng/api';
export interface Tree {
  subject?: string;
  alias?: string;
  certificateType?: CertificateType;
  children?: Tree[];
}
