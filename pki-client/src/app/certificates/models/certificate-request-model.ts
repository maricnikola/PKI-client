export interface Certificate {
  id?: number;
  commonName?: string;
  organization?: string;
  email?: string;
  country?: string;
  publicKey?: string;
  certificateType?: CertificateType;
  certificateRequestStatus?: CertificateRequestStatus;
  issuerAlias?: string;
  extensionsDTO?: Extensions
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

export interface Extensions {
  keyUsages?: KeyUsage[],
  domainName?: string
}

export enum KeyUsage {
  ENCIPHER_ONLY= 'ENCIPHER_ONLY',
  CRL_SIGN = 'CRL_SIGN',
  KEY_CERT_SIGN = 'KEY_CERT_SIGN',
  KEY_AGREEMENT = 'KEY_AGREEMENT',
  DATA_ENCIPHERMENT = 'DATA_ENCIPHERMENT',
  KEY_ENCIPHERMENT = 'KEY_ENCIPHERMENT',
  NON_REPUDIATION = 'NON_REPUDIATION',
  DIGITAL_SIGNATURE = 'DIGITAL_SIGNATURE',
  DECIPHER_ONLY = 'DECIPHER_ONLY'
}
