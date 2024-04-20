import {CertificateType} from "./certificate-request-model";

export interface Tree {
  subject?: string;
  alias?: string;
  certificateType?: CertificateType;
  children?: Tree[]
}
