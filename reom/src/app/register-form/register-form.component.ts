import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {AuthService} from "../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})

export class RegisterFormComponent implements OnInit {

  signUpUser = {
    email: '',
    password: '',
    passwordConfirmation: ''
  };
  
  @Output() onFormResult = new EventEmitter<any>();

  constructor(private authSerivce:AuthService,
              private router:Router) { }

  ngOnInit() {
  }

  onSignUpSubmit(){
    this.authSerivce.registerUser(this.signUpUser).subscribe(
        (res) => {
          if (res.status == 200){
            this.onFormResult.emit({signedUp: true, res});
            this.router.navigate(['/profile']);
          }
        },
        (err) => {
          console.log(err.json())
          this.onFormResult.emit({signedUp: false, err})
        }
    )
  }

}
