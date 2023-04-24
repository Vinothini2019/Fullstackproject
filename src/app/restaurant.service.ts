import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Restaurant } from './restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
 

  private baseURL = "http://localhost:8080/Swiggy/HotelDetails";

  constructor(private httpClient: HttpClient) { }
  
  getRestaurantList(): Observable<Restaurant[]>{
    return this.httpClient.get<Restaurant[]>(`${this.baseURL}`);
  }

  createRestaurant(restaurant: Restaurant): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, restaurant);
  }

  getRestaurantById(hotelId: number): Observable<Restaurant>{
    return this.httpClient.get<Restaurant>(`${this.baseURL}/${hotelId}`);
  }
updateRestaurant(hotelId: number, restaurant: Restaurant): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${hotelId}`, restaurant);
  }

  //localhost:4200/delete/5
  deleteRestaurant(hotelId: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${hotelId}`);
  }
  deleteAll(): Observable<any>{
    return this.httpClient.delete(`${this.baseURL}`);
  }
  findByName(name : any): Observable<Restaurant[]>{
    return this.httpClient.get<Restaurant[]>(`${this.baseURL}?name=${name}`);
  }

  findByVegRestaurant(): Observable<Restaurant[]>{
    return this.httpClient.get<Restaurant[]>(`${this.baseURL}/veg`);
  }
  findByNonVegRestaurant(): Observable<Restaurant[]>{
    return this.httpClient.get<Restaurant[]>(`${this.baseURL}/nonveg`);
  }
}