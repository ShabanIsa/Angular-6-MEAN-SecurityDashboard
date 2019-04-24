import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Company } from '../../company.model';
import { CompanyService } from '../../company.service';
import { Observable } from 'rxjs/Observable';

import { GridDataResult } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';

//import { Product } from './model';
//import { EditService } from './edit.service';

import { map } from 'rxjs/operators/map';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  companies: Company[];
  //public company: Company;
  //public isNew: boolean;
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
    this.router.navigate([`/edit/${id}`]);
  }

  detailsCompany(id) {
    this.router.navigate([`/details/${id}`]);
  }

  deleteCompany(id) {
    this.companyService.deleteCompany(id).subscribe(() => {
      this.fetchCompanies();
    });
  }

  profile() {
    this.router.navigate(['/profile']);
  }
}
