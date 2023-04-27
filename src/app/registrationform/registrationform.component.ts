import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.css']
})
export class RegistrationformComponent {

  firstname='';
  lastname='';
  password='';
  mobilenumber='';

  constructor(public loginService: AuthenticationService,private router:Router){}
    

  ngOnInit(){
    
  }


onregister(){
  if(this.firstname === '' || this.lastname === '' || this.password === '' || this.mobilenumber === ''){

  var status = confirm("It is compusary to fill all the fields");

  }
  else{
    var status = confirm("Successfully register saved");
    if(status==true){
    this.router.navigate(['login']);
    }
  }
}
}