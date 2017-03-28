import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DropdownModule } from 'ng2-bootstrap';
import { AppComponent } from './app.component';
import { MaterializeModule } from 'angular2-materialize';
import { AppRoutingModule } from './app-routing.module';

import { Angular2TokenService, A2tUiModule } from 'angular2-token';
import { AuthService } from "./services/auth.service";
import { AuthGuard } from "./guards/auth.guard";

import { HomeModule } from './home/home.module';
import { DashboardModule } from './dashboard/dashboard.module';

import { FeatureComponent } from './feature/feature.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AuthDialogComponent } from './auth-dialog/auth-dialog.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    FeatureComponent,
    ToolbarComponent,
    AuthDialogComponent,
    LoginFormComponent,
    RegisterFormComponent,
    ProfileComponent
  ],
  imports: [
    DropdownModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterializeModule,
    A2tUiModule,
    HomeModule,
    DashboardModule
  ],
  providers: [Angular2TokenService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
