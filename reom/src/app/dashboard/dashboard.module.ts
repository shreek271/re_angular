import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectModule } from '../project/project.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    ProjectModule
  ],
  exports: [
    DashboardComponent
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
