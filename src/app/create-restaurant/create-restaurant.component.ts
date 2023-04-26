import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-restaurant',
  templateUrl: './create-restaurant.component.html',
  styleUrls: ['./create-restaurant.component.css']
})
export class CreateRestaurantComponent implements OnInit {

  restaurant: Restaurant = new Restaurant();
    constructor(private restaurantService: RestaurantService,
      private router: Router) { }
  
    ngOnInit(): void {
    }
  
    saverestaurant(){
      this.restaurantService.createRestaurant(this.restaurant).subscribe( (data: any) =>{
        console.log(data);
        this.goToRestaurantList();
      },
        (      error: any) => console.log(error));
    }
  
    goToRestaurantList(){
      this.router.navigate(['/restaurant']);
    }
  
    onSubmit(){
      console.log(this.restaurant);
      this.saverestaurant();
    }
    confirmsave(){
      var status = confirm("Saved Successfully");
      if(status==true){
        this.router.navigate(['restaurant-list']);
      }
      else{
        this.router.navigate(['restaurant-list']);
      }
    }
    
  }