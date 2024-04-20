import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Certificate} from "../models/certificate-request-model";
import {Observable} from "rxjs";
import {environment} from "../../../env/env";

@Injectable({
  providedIn: 'root'
})
export class CertificatesService {

  constructor(private http: HttpClient) { }

  getCertificateRequests(): Observable<Certificate[]>{
    const url =  environment.apiPki + `certificatesRequests`;
    return this.http.get<Certificate[]>(url);
  }

  acceptCertificateRequest(id: number): Observable<Certificate> {
    const url = environment.apiPki + `certificatesRequests/${id}/accept`;
    return this.http.put<Certificate>(url, {});
  }

  declineCertificateRequest(id: number, report: string): Observable<Certificate> {
    const url = environment.apiPki + `certificatesRequests/${id}/decline`;
    return this.http.put<Certificate>(url, report);
  }

}
