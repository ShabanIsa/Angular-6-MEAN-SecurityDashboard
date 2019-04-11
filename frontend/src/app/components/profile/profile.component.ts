import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { CompanyService } from '../../company.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  id: String;
  companyInfo: any = {};
  updateForm: FormGroup;

  constructor(private companyService: CompanyService, private router: Router, private route: ActivatedRoute, private snackBar: MatSnackBar, private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    console.log("Company info ngOnInit")
    this.route.params.subscribe(params => {
      this.id = params.id;
      var companyInfo = this.companyService.getCompanyInfoById(this.id);
      //if(companyInfo.UserName.value != null){
        //console.log("companyInfo is not NULL");
      companyInfo.subscribe(res => {
        this.companyInfo = res;
        this.updateForm.get('UserName').setValue(this.companyInfo.UserName);
        this.updateForm.get('Email').setValue(this.companyInfo.Email);
        this.updateForm.get('FirstName').setValue(this.companyInfo.FirstName);
        this.updateForm.get('LastName').setValue(this.companyInfo.LastName);
        
        this.updateForm.get('Adress').setValue(this.companyInfo.Adress);
        this.updateForm.get('City').setValue(this.companyInfo.City);
        this.updateForm.get('Country').setValue(this.companyInfo.Country);
        this.updateForm.get('PostalCode').setValue(this.companyInfo.PostalCode);
      });
    //}else 
    //{
     // console.log("companyInfo is null")
    //}
  });
  }

  createForm() {
    console.log("CompanyInfo createform");
    this.updateForm = this.fb.group({
      UserName: '',
      Email: '',
      FirstName: '',
      LastName: '',
      Adress: '',
      City: '',
      Country: '',
      PostalCode: ''
    });
  }

  updateCompanyInfo(userName, email,firstName,lastName,address,city,country,postalCode) {
    console.log("updateCompanyInfo component")
    this.companyService.updateCompanyInfo(this.id, userName, email,firstName,lastName,address,city,country,postalCode).subscribe(() => {
      this.snackBar.open('Company updated successfully', 'OK', {
        duration: 3000,
      });
    });
  }

}
