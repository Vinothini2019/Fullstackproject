import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  constructor(public loginService: AuthenticationService,private router:Router){}
    

  ngOnInit(){
    
  }



  contactform(){
    var status = confirm("Submit Successfully");
    if(status==true){
      this.router.navigate(['home']);
    }
    else{
      this.router.navigate(['feedbackform']);
    }
  }
}
