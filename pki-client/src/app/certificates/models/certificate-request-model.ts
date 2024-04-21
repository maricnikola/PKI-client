export interface Certificate {
  id?: number;
  commonName?: string;
  organization?: string;
  email?: string;
  country?: string;
  publicKey?: string;
  certificateType?: CertificateType;
  certificateRequestStatus?: CertificateRequestStatus;
}

export enum CertificateRequestStatus {
  ACCEPTED = 'ACCEPTED',
  DECLINED = 'DECLINED',
  PENDING = 'PENDING'
}

export enum CertificateType {
  END_ENTITY = 'END_ENTITY',
  INTERMEDIATE = 'INTERMEDIATE',
  HTTPS = 'HTTPS',
  ROOT = 'ROOT'
}
