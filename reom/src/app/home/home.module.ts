import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HomeComponent
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
