import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { Restaurant } from '../restaurant';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-restaurant',
  templateUrl: './update-restaurant.component.html',
  styleUrls: ['./update-restaurant.component.css']
})
export class UpdateRestaurantComponent implements OnInit {
 

  hotelId: number = 0;
  restaurant:  Restaurant= new Restaurant();
  constructor(private restaurantService: RestaurantService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.hotelId = this.route.snapshot.params['hotelId'];

    this.restaurantService.getRestaurantById(this.hotelId).subscribe(data => {
      this.restaurant = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.restaurantService.updateRestaurant(this.hotelId, this.restaurant).subscribe( data =>{
      this.goToRestaurantList();
    }
    , error => console.log(error));
  }

  goToRestaurantList(){
    this.router.navigate(['/restaurant']);
  }
  confirmupdate(){
    var status = confirm("Updated Successfully");
    if(status==true){
      this.router.navigate(['restaurant-list']);
    }
    else{
      this.router.navigate(['restaurant-list']);
    }
  }
}


