import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from "angular2-token";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(protected authTokenService:Angular2TokenService) { }

  ngOnInit() {
  }

}
