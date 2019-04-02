import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from '../../company.service';
import { Company } from 'src/app/company.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  id: String;
  company: Company;
  public barChartLabels = ['Security Indicator 1', 'Security Indicator 2'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [];
  constructor(private companyService: CompanyService, private route: ActivatedRoute) { }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

    public canvasWidth = 300
    public needleValue = 90
    public centralLabel = ''
    public name = 'Gauge chart'
    public bottomLabel = '90'
    public options = {
    hasNeedle: true,
    needleColor: 'gray',
    needleUpdateSpeed: 1000,
    arcColors: ['rgb(44, 151, 222)', 'lightgray'],
    arcDelimiters: [90],
    rangeLabel: ['0', '100'],
    needleStartValue: 50,
}

  ngOnInit() {
    this.fetchCompany();
  }

  fetchCompany() {
    this.route.params.subscribe(
      params => {
        console.log(`Param ID: ${params.id}`);
        this.companyService
          .getCompanyById(params.id)
          .subscribe((companyData: Company) => {
            this.company = companyData;

            let secInd1 = +(this.company.securityIndicator1);
            let secInd2 = +(this.company.securityIndicator2);
            console.log('Data requested ... ');

            this.barChartData = [
              { data: [secInd1, secInd2], label: 'Series A' },
              { data: [secInd2, secInd1], label: 'Series B' }
            ];
          });
      }
    )
  }

}