import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateRestaurantComponent } from './create-restaurant/create-restaurant.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { UpdateRestaurantComponent } from './update-restaurant/update-restaurant.component';
import { ViewRestaurantComponent } from './view-restaurant/view-restaurant.component';
import { FormsModule} from '@angular/forms';
import { FeedbackformComponent } from './feedbackform/feedbackform.component';
import { LogoutComponent } from './logout/logout.component';
import { RegistrationformComponent } from './registrationform/registrationform.component';
import { LoginComponent } from './login/login.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';



@NgModule({
  declarations: [
    AppComponent,
    CreateRestaurantComponent,
    RestaurantListComponent,
    UpdateRestaurantComponent,
    ViewRestaurantComponent,
    FeedbackformComponent,
    LogoutComponent,
    RegistrationformComponent,
    LoginComponent,
    ProfileCardComponent,
    AboutUsComponent,
    HomeComponent,
    ContactUsComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
