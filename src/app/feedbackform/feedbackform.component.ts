import { Component } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { Restaurant } from '../restaurant';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-feedbackform',
  templateUrl: './feedbackform.component.html',
  styleUrls: ['./feedbackform.component.css']
})
export class FeedbackformComponent {

  constructor(private restaurantService: RestaurantService,
    private route: ActivatedRoute,
    private router: Router) { }


    ngOnInit() {
    }

  confirmfeedback(){
    var status = confirm("Submit Successfully");
    if(status==true){
      this.router.navigate(['contact-us']);
    }
    else{
      this.router.navigate(['contact-us']);
    }
  }
  back(){
    this.router.navigate(['home']);
}
}
