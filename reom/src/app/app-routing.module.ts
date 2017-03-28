import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent} from './home/home.component';
import { FeatureComponent } from './feature/feature.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
  
  { path: '', redirectTo: '/home', pathMatch: 'full' },  // default route
  { path: 'home',component: HomeComponent },
  { path: 'feature', component: FeatureComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]}
  ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}