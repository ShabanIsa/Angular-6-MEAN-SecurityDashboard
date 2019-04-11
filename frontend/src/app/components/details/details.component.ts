import { Component, OnInit, HostListener } from '@angular/core';
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

  public value: number = 10;
  //Base chart: 
  public barChartLabels = ['Security Indicator 1', 'Security Indicator 2'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [{ data: [20, 30], label: 'Series A' }];
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  //CHART 2 -------------------------------------
  public canvasWidth1 = 300;
  public needleValue1 = 70;
  public centralLabel1 = '';
  public options1 =
    {
      hasNeedle: true,
      needleColor: 'black',
      needleUpdateSpeed: 1500,
      arcColors: ['rgb(100, 151, 222)', 'lightblue'],
      arcDelimiters: [70],
      rangeLabel: ['0', '100'],
      needleStartValue: 0,
    }
  public name1 = 'Gauge chart';
  public bottomLabel1 = '70';

  //CHART 1 -------------------------------------
  public canvasWidth = 300;
  public needleValue = 30;
  public centralLabel = '';
  public name = 'Gauge chart';
  public bottomLabel = '30';
  public options =
    {
      hasNeedle: true,
      needleColor: 'black',
      needleUpdateSpeed: 1500,
      arcColors: ['rgb(100, 151, 222)', 'lightblue'],
      arcDelimiters: [70],
      rangeLabel: ['0', '100'],
      needleStartValue: 0,
    }
  
  constructor(private companyService: CompanyService, private route: ActivatedRoute) { }

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
            console.log('Data from details requested ... ');

            this.barChartData = [
              { data: [secInd1, secInd2], label: 'Series A' },
              { data: [secInd2, secInd1], label: 'Series B' },
              { data: [secInd2, secInd1], label: 'Series C' }
            ];

            console.log("this operaions started...");
            console.log(this.options);
            this.bottomLabel = secInd1.toString();
            this.needleValue = secInd1;
            this.options = {
              hasNeedle: true,
              needleColor: 'gray',
              needleUpdateSpeed: 1000,
              arcColors: ['rgb(44, 151, 222)', 'lightgray'],
              arcDelimiters: [secInd1],
              rangeLabel: ['0', secInd2.toString()],
              needleStartValue: 50,
            }
            this.value = secInd1;
            console.log("this operaions ended...");
            console.log(this.options);
          });
      }
    )
  }
}