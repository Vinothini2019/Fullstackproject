import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant'
import { RestaurantService } from '../restaurant.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit{


  restaurant: Restaurant[] = [];
  restaurantName : String = '';
  restaurantFoundBySearch : Restaurant[] = [];
  
  
    constructor(private restaurantService: RestaurantService,
      private router: Router) { }
  
    ngOnInit(): void {
      this.getRestaurant();
    }
  
    private getRestaurant(){
      this.restaurantService.getRestaurantList().subscribe(data => {
        this.restaurant = data;
  
  
      });
    }
  
    restaurantDetails(hotelId: number){
      this.router.navigate(['view-restaurant', hotelId]);
    }
  
    updateRestaurant(hotelId: number){
      this.router.navigate(['update-restaurant', hotelId]);
    }

    deleteRestaurant(hotelId: number){
      this.restaurantService.deleteRestaurant(hotelId).subscribe(data => {
        console.log(data);
        this.getRestaurant();

      })
    }
  
    confirmDelete(restaurant:Restaurant){
      var status = confirm("Are you sure did you want to delete this record?");
      if(status==true){
        this.deleteRestaurant(restaurant.hotelId);
      }
      else{
        this.getRestaurant();
      }
    }
    confirmUpdate(restaurant:Restaurant){
      var status = confirm("Are you sure you want update this record?");
      if(status==true){
        this.updateRestaurant(restaurant.hotelId);
      }
      else{
        this.getRestaurant();
      }
    }

    confirmRemoveAll(){
      var status=confirm("If you  want to delete all records?");
      if(status==true){
        this.removeAllRestaurant();
      }
      else{
        this.getRestaurant();
      }
    } 
       removeAllRestaurant(): void{
         this.restaurantService.deleteAll().subscribe(data => {
          console.log(data);
          this.getRestaurant();
         },
           ( error: any)=>{
          console.log(error);
         });
      }
      searchByName(){
        this.restaurantService.findByName(this.restaurantName).subscribe( data => {
          this.restaurant= data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
      
      }
      fetchVegHotel(){
        this.restaurantService.findByVegRestaurant().subscribe(
          data => {
            this.restaurant = data;
              console.log(data);
            },
            error => {
              console.log(error);
            });
      }
      fetchNonVegHotel(){
        this.restaurantService.findByNonVegRestaurant().subscribe(
          data => {
            this.restaurant = data;
              console.log(data);
            },
            error => {
              console.log(error);
            });
      }
  }


