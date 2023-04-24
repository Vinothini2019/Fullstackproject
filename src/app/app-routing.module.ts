import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { CreateRestaurantComponent } from './create-restaurant/create-restaurant.component';
import { UpdateRestaurantComponent } from './update-restaurant/update-restaurant.component';
import { ViewRestaurantComponent } from './view-restaurant/view-restaurant.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';
import { RegistrationformComponent } from './registrationform/registrationform.component';
import { FeedbackformComponent } from './feedbackform/feedbackform.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'feedback', component:  FeedbackformComponent},
  {path: 'registrationform', component:  RegistrationformComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'restaurant', component: RestaurantListComponent},
  {path: 'create-restaurant', component: CreateRestaurantComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'update-restaurant/:hotelId', component: UpdateRestaurantComponent},
  {path: 'view-restaurant/:hotelId', component: ViewRestaurantComponent},
  {path: 'profile-card', component:  ProfileCardComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'contact-us', component: ContactUsComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
