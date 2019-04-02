import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) {
    
   }
  getCompanies(){
    console.log("getCompanies");
    console.log(this.http.get(`${this.uri}/companies`));
    return this.http.get(`${this.uri}/companies`);
  }

  getCompanyById(id){
    console.log("getCompanyById");
    return this.http.get(`${this.uri}/companies/${id}`);
  }

  

  addCompany(companyName, securityIndicator1, securityIndicator2, securityIndicator3) {
    console.log("addCompany");
    const company = {
      companyName: companyName,
      securityIndicator1: securityIndicator1,
      securityIndicator2: securityIndicator2,
      securityIndicator3: securityIndicator3
    };
    return this.http.post(`${this.uri}/companies/add`, company);
  }

  updateCompany(id : String, companyName, securityIndicator1, securityIndicator2, securityIndicator3, securityIndicator4){
    console.log("updateCompany");
    const company = {
      companyName: companyName,
      securityIndicator1: securityIndicator1,
      securityIndicator2: securityIndicator2,
      securityIndicator3: securityIndicator3,
      securityIndicator4: securityIndicator4
    };
    console.log(`${this.uri}/companies/update/${id}`);
    return this.http.post(`${this.uri}/companies/update/${id}`, company);
  }

  deleteCompany(id) {
    console.log("deleteCompany");
    console.log(`${this.uri}/companies/delete/${id}`);
    return this.http.get(`${this.uri}/companies/delete/${id}`);
  }


}
