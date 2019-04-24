import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';
import { Md5 } from 'ts-md5/dist/md5';
import { ViewChild } from '@angular/core';
import {
    ConnectedPositioningStrategy,
    IgxDropDownComponent,
    IgxInputGroupComponent
} from "igniteui-angular";

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CompanyService } from 'src/app/company.service';
import { Company } from '../../company.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  companies: Company[];
  public items: Array<string> = [];
  @ViewChild(IgxDropDownComponent) public igxDropDown: IgxDropDownComponent;
  @ViewChild("inputGroup", { read: IgxInputGroupComponent}) public inputGroup: IgxInputGroupComponent;
  createForm: FormGroup;

  constructor(private userService: UserService,private companyService: CompanyService, private fb: FormBuilder, private router: Router) {
    console.log("constructor")
    this.createForm = this.fb.group({
      userName: ['', Validators.required],
      password: ''
    });
  }

  fetchCompanies() {
    console.log('Here');
    this.companyService
    .getCompanies()
    .subscribe((data: Company[]) => {
      this.companies = data;
      let companyNames = "";
      data.forEach(element => {
        companyNames += element.companyName;
        companyNames +="//";
      });
      console.log('Data requested ... ');
      this.items = companyNames.split('//');
      this.items.splice(-1,1);
    });
  }

  public openDropDown() {
      if (this.igxDropDown.collapsed) {
          this.igxDropDown.open({
              modal: false,
              positionStrategy: new ConnectedPositioningStrategy({
                  target: this.inputGroup.element.nativeElement
              })
          });
      }
  }

  addUser(userName, password, company) {
    let userPasswordHash = Md5.hashStr(password);
    console.log("selected company: " + company);
    this.userService.addUser(userName, userPasswordHash, company).subscribe(() => {
      this.router.navigate(['/list']);
    });
  }

  ngOnInit() {
    this.fetchCompanies();
  }

}
