import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate(username : any, password : any)  {
    if (username === "vino" && password === "password") {
      sessionStorage.setItem('username', username)
      return true;
    } else {
      alert("Please enter the correct username and password")
      return false;
    }
    
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}