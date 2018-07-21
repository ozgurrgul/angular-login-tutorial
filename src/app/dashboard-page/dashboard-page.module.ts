import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './dashboard-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DashboardPageComponent],
  exports: [
    DashboardPageComponent
  ]
})
export class DashboardPageModule { }
