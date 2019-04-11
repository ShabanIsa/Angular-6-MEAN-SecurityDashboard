import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyService } from '../../company.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  createForm: FormGroup;
  constructor(private companyService: CompanyService, private fb: FormBuilder, private router: Router) {
    this.createForm = this.fb.group({
      companyName: ['', Validators.required],
      securityIndicator1: '',
      securityIndicator2: '',
      securityIndicator3: ''
    });
  }
  addCompany(companyName, securityIndicator1, securityIndicator2, securityIndicator3) {
    this.companyService.addCompany(companyName, securityIndicator1, securityIndicator2, securityIndicator3).subscribe(() => {
      this.router.navigate(['/list']);
    });
  }

  createCompanyInfo(userName, email, firstName, lastName, address, city, country, postalCode)
  {
    this.companyService.addCompanyInfo(userName, email, firstName, lastName, address, city, country, postalCode).subscribe(() => {
      this.router.navigate(['/list']);
    });
  }
  ngOnInit() {
  }
}