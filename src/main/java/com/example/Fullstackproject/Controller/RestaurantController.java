package com.example.Fullstackproject.Controller;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.Fullstackproject.Resource.ResourceNotFoundException;
import com.example.Fullstackproject.Swiggy.SwiggyDetails;
import com.example.Fullstackproject.Repository.RestaurantRepository;








@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/Swiggy")
public class RestaurantController {
	@Autowired
	private RestaurantRepository restaurantRepo;
	/* @PostMapping- method handles the Http POST requests matched with the specified URL
	 * @RequestBody- Objects are passed as a parameter to swiggy model table
	 * 
	 * In this Mapping ,we get all the restaurant details in the form of Swiggy model object   */

	@PostMapping("/HotelDetails")
	public SwiggyDetails createHotel(@RequestBody SwiggyDetails hotel) {
		return restaurantRepo.save(hotel);
	}
	/* @GetMapping-Display all the details of the restaurants by using http  get request*/

	/*@GetMapping("/Restaurant")
	public List<SwiggyDetails> getAllHotels(){
		return restaurantRepo.findAll();
	}
	 @GetMapping-Display all the details of the restaurant of a particular id. to get this id ,we use @PathVariable 
	 * by using http  get request*/

	@GetMapping("/HotelDetails/{hotelId}")
	public ResponseEntity<SwiggyDetails> getHotelById(@PathVariable("hotelId") int id) {
		SwiggyDetails hotel= restaurantRepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Restaurant not exist with id :" + id));
		return ResponseEntity.ok(hotel);
	}
	/*@PutMapping- Update the restaurant details of the particular id. By using @DynamicUpdate we change the 
	 * particular attribute by using http put request */

	@PutMapping("/HotelDetails/{hotelId}")
	public ResponseEntity<SwiggyDetails> updateHotel(@PathVariable("hotelId") int id, @RequestBody SwiggyDetails hotel){
		SwiggyDetails hotelUpd = restaurantRepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Restaurant not exist with id :" + id));
		
		hotelUpd.setFoodType(hotel.getFoodType());
		hotelUpd.setLocation(hotel.getLocation());
		hotelUpd.setRestaurantName(hotel.getRestaurantName());
		
		SwiggyDetails updatedHotels = restaurantRepo.save(hotelUpd);
		return ResponseEntity.ok(updatedHotels);
	}
	//@DeleteMapping-Delete the particular id of the restaurant detail by using http delete request//

	@DeleteMapping("/HotelDetails/{hotelId}")
	public ResponseEntity<Map<String, Boolean>> deleteHotels(@PathVariable("hotelId") int id){
		SwiggyDetails delHotel=restaurantRepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Restaurant not exist with id :" + id));
		
		restaurantRepo.delete(delHotel);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	/*@GetMapping("/Restaurant/foodType/{foodId}")
	public List<SwiggyDetails> getHotelByfoodId(@PathVariable("foodId") int foodId) {
		return restaurantRepo.findById(foodId);
	
			}*/
	@DeleteMapping("/HotelDetails")
	public ResponseEntity<HttpStatus> deleteAllHotels(){
		try {
			restaurantRepo.deleteAll();
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		catch(Exception e){
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);

		}
	}
	@GetMapping("/HotelDetails")
	public ResponseEntity<List<SwiggyDetails>> gethotel(@RequestParam(required=false) String name){
		try {
			List<SwiggyDetails> hotel=new ArrayList<SwiggyDetails>();
			if(name!=null) {
				restaurantRepo.findByrestaurantName(name).forEach(hotel::add);
				return new ResponseEntity<>(hotel,HttpStatus.OK);
			}
			else {
				hotel=restaurantRepo.findAll();
				return new ResponseEntity<>(hotel,HttpStatus.OK);

			}
		}catch(Exception e) {
			return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);

		}
	}
	@GetMapping("/HotelDetails/veg")
	public ResponseEntity<List<SwiggyDetails>> findByVegHotel(){
		try {
			List<SwiggyDetails> vegHotelList=restaurantRepo.findByfoodType("veg");
			if(vegHotelList.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);

			}
			return new ResponseEntity<>(vegHotelList,HttpStatus.OK);
		}
		catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);

		}
	}
@GetMapping("/HotelDetails/nonveg")
public ResponseEntity<List<SwiggyDetails>> findByNonVegHotel(){
	try {
		List<SwiggyDetails> nonVegHotelList=restaurantRepo.findByfoodType("nonveg");
		if(nonVegHotelList.isEmpty()) {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);

		}
		return new ResponseEntity<>(nonVegHotelList,HttpStatus.OK);
	}
	catch(Exception e) {
		return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);

	}
}


}