import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  title='Restaurant';
  constructor(public loginService: AuthenticationService,private router:Router){}
    

  ngOnInit(){
    
  }

  confirmLogout(){
    var status = confirm("Are you sure you want to logged out");
    if(status==true){
      this.router.navigate(['login']);
    }
    else{
      this.router.navigate(['feedback']);
    }
  }
}
