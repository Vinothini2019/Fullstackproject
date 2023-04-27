import { Component ,OnInit} from '@angular/core';
import { Restaurant } from '../restaurant';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../restaurant.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view-restaurant',
  templateUrl: './view-restaurant.component.html',
  styleUrls: ['./view-restaurant.component.css']
})
export class ViewRestaurantComponent implements OnInit{


  hotelId: number = 0;
  Restaurant: any = [];
  constructor(private restaurantService: RestaurantService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    console.log("i came");
    this.hotelId = this.route.snapshot.params['hotelId'];

    this.Restaurant = new Restaurant();
    this.restaurantService.getRestaurantById(this.hotelId).subscribe( data=> {
      this.Restaurant = data;
    });
  }
 
    onback(){
      this.router.navigate(['restaurant']);
}
}


