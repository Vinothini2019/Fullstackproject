import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  invalidLogin = false

  constructor(private router: Router,
    private loginservice: AuthenticationService) { }

  ngOnInit() {
  }

  checkLogin() {
    if (this.loginservice.authenticate(this.username, this.password)
    ) {
      this.router.navigate(['home']);
      console.log("navigate..");
      this.invalidLogin = false;
    } else
      this.invalidLogin = true;
  }
  signup() {
    var status = confirm("Are you sure you want to go to registrationform");
    if(status==true){
      this.router.navigate(['registrationform']);
    }
    else{
      this.router.navigate(['login']);
    }
}
}


