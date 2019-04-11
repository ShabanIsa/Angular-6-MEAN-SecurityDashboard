import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Company } from '../../company.model';
import { CompanyService } from '../../company.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  companies: Company[];
  displayedColumns = ['companyName', 'securityIndicator1', 'securityIndicator2', 'securityIndicator3', 'securityIndicator4', 'actions'];

  constructor(private companyService: CompanyService, private router: Router) { }

  ngOnInit() {
    console.log("onInit");
    this.fetchCompanies();
  }

  fetchCompanies() {
    console.log('Here');
    this.companyService
    .getCompanies()
    .subscribe((data: Company[]) => {
      this.companies = data;
      console.log('Data requested ... ');
    });
  }

  editCompany(id) {
    console.log("editCompany")
    this.router.navigate([`/edit/${id}`]);
  }

  detailsCompany(id){
    console.log("detailsCompany")
    this.router.navigate([`/details/${id}`]);
  }

  profileCompany(id){
    console.log("profileCompany")
    this.router.navigate([`/profile/${id}`]);
  }

  deleteCompany(id) {
    this.companyService.deleteCompany(id).subscribe(() => {
      this.fetchCompanies();
    });
  }
}
