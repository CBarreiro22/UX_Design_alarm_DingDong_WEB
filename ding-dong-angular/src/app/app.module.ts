import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MainComponent } from './main/main.component';
import { ManagementComponent } from './management/management.component';

import {MatSelectModule} from '@angular/material/select';
import { LoginComponent } from './login/login.component';
import { AlarmsComponent } from './alarms/alarms.component';
import { ActionsComponent } from './actions/actions.component';
import { ReportsComponent } from './reports/reports.component';
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import {
  MatSlideToggleModule,
  _MatSlideToggleRequiredValidatorModule,
} from '@angular/material/slide-toggle';

@NgModule({
  declarations: [AppComponent, MainComponent, ManagementComponent, LoginComponent, AlarmsComponent, ActionsComponent, ReportsComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatTabsModule,MatSelectModule,MatPaginatorModule,MatSlideToggleModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
