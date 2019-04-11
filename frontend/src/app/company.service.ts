import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) {

  }
  getCompanies() {
    console.log("getCompanies");
    console.log(this.http.get(`${this.uri}/companies`));
    return this.http.get(`${this.uri}/companies`);
  }

  getCompanyById(id) {
    console.log("getCompanyById");
    return this.http.get(`${this.uri}/companies/${id}`);
  }

  getCompanyInfoById(id) {
    console.log("SERVICE - getCompanyInfoById");
    return this.http.get(`${this.uri}/companyInfo/${id}`);
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

  addCompanyInfo(userName, email, firstName, lastName, address, city, country, postalCode) {
    console.log("addCompanyInfo");
    const companyInfo = {
      userName: userName,
      email: email,
      firstName: firstName,
      lastName: lastName,
      address: address,
      city: city,
      country: country,
      postalCode: postalCode
    };
    return this.http.post(`${this.uri}/companyInfo/add`, companyInfo);

  }

  updateCompany(id: String, companyName, securityIndicator1, securityIndicator2, securityIndicator3, securityIndicator4) {
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

  updateCompanyInfo(id: String, UserName, Email, FirstName, LastName, Adress, City, Country, PostalCode) {
    console.log("updateCompanyInfo");
    const companyInfo = {
      UserName: UserName,
      Email: Email,
      FirstName: FirstName,
      LastName: LastName,
      Adress: Adress,
      City: City,
      Country: Country,
      PostalCode: PostalCode
    };

    console.log(`${this.uri}/companyInfo/update/${id}`);
    return this.http.post(`${this.uri}/companyInfo/update/${id}`, companyInfo);
  }

  deleteCompany(id) {
    console.log("deleteCompany");
    console.log(`${this.uri}/companies/delete/${id}`);
    return this.http.get(`${this.uri}/companies/delete/${id}`);
  }

}
