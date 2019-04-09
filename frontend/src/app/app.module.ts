import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID} from '@angular/core';

import { ChartsModule } from 'ng2-charts';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { CompanyService } from './company.service';
import { HttpClientModule } from '@angular/common/http';
import { GaugeChartComponent } from 'angular-gauge-chart';
import { DetailsComponent } from './components/details/details.component';
import { MatToolbarModule, 
  MatFormFieldModule, 
  MatInputModule, 
  MatOptionModule, 
  MatSelectModule, 
  MatIconModule, 
  MatButtonModule, 
  MatCardModule, 
  MatTableModule, 
  MatDividerModule, 
  MatSnackBarModule } from '@angular/material';
import { GaugesModule } from '@progress/kendo-angular-gauges';
import { ProgressChartComponentComponent } from './components/progress-chart-component/progress-chart-component.component';
import 'hammerjs';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { ARCGaugeComponent } from './components/arcgauge/arcgauge.component';
import { IntlModule } from '@progress/kendo-angular-intl';
import '@progress/kendo-angular-intl/locales/bg/all';
import { JQueryChartComponent } from './components/j-query-chart/j-query-chart.component';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';



const routes: Routes = [
  {path: 'create', component: CreateComponent },
  {path: 'edit/:id', component: EditComponent },
  {path: 'list', component: ListComponent},
  {path: 'details/:id', component: DetailsComponent},
  {path: '', redirectTo: 'list', pathMatch:'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateComponent,
    EditComponent,
    DetailsComponent,
    GaugeChartComponent,
    ProgressChartComponentComponent,
    ARCGaugeComponent,
    JQueryChartComponent
  ],
  imports: [
    FormsModule, 
    InputsModule, 
    LabelModule,
    BrowserModule,
    ChartsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatSnackBarModule,
    GaugesModule,
    IntlModule,
    DateInputsModule
  ],
  providers: [CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
