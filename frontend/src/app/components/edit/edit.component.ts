import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { CompanyService } from '../../company.service';
import { Company } from '../../company.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  id: String;
  company: any = {};
  updateForm: FormGroup;
  constructor(private companyService: CompanyService, private router: Router, private route: ActivatedRoute, private snackBar: MatSnackBar, private fb: FormBuilder) { 
    this.createForm();
  }
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.companyService.getCompanyById(this.id).subscribe(res => {
        this.company = res;
        this.updateForm.get('companyName').setValue(this.company.companyName);
        this.updateForm.get('securityIndicator1').setValue(this.company.securityIndicator1);
        this.updateForm.get('securityIndicator2').setValue(this.company.securityIndicator2);
        this.updateForm.get('securityIndicator3').setValue(this.company.securityIndicator3);
        this.updateForm.get('securityIndicator4').setValue(this.company.securityIndicator4);
      });
    });
  }

  createForm() {
    this.updateForm = this.fb.group({
      companyName: ['', Validators.required ],
      securityIndicator1: '',
      securityIndicator2: '',
      securityIndicator3: '',
      securityIndicator4: ''
    });
  }
  updateCompany(companyName, securityIndicator1, securityIndicator2, securityIndicator3, securityIndicator4) {
    console.log("updateCompany component")
    this.companyService.updateCompany(this.id,companyName, securityIndicator1, securityIndicator2, securityIndicator3, securityIndicator4).subscribe(() => {
      this.snackBar.open('Company updated successfully', 'OK', {
        duration: 3000,
      });
    });
  }
}