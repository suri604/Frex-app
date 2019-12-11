import {LoginServiceService} from './services/login-service.service';

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {UserProfileDetailsFormComponent} from './components/user-profile-details-form/user-profile-details-form.component';
import {UserProfileUpdateFormComponent} from './components/user-profile-update-form/user-profile-update-form.component';
import {UserServiceService} from './services/user-service.service';
import {PartnerServiceService} from './services/partner-service.service';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {AppRoutingModule} from './app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {HomeComponent} from './components/home/home.component';
import {FooterComponent} from './components/footer/footer.component';
import {BecomePartnerComponent} from './components/become-partner/become-partner.component';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {UserHomeProfileComponent} from './components/user-home-profile/user-home-profile.component';
import {FitnessHomeComponent} from './components/fitness-home/fitness-home.component';
import {FitnessDashboardComponent} from './components/fitness-dashboard/fitness-dashboard.component';
import {FitnessFocusComponent} from './components/fitness-focus/fitness-focus.component';
import {EnvironmentMainComponent} from './components/environment-main/environment-main.component';
import {EnvironmentTicketListComponent} from './components/environment-ticket-list/environment-ticket-list.component';
import {EnvironmentImageService} from './services/environment-image.service';
import {EnvironmentTicketService} from './services/environment-ticket.service';
import {environment} from 'src/environments/environment';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireDatabaseModule, AngularFireDatabase} from '@angular/fire/database';
import {AngularFireModule} from '@angular/fire';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MDBBootstrapModule, NavbarComponent} from 'angular-bootstrap-md';
import {EnvironmentDashboardProfileComponent} from './components/environment-dashboard-profile/environment-dashboard-profile.component';
import {EnvironmentQuotesComponent} from './components/environment-quotes/environment-quotes.component';
import {EnvironmentHomeComponent} from './components/environment-home/environment-home.component';
import {DonationComponent} from './components/donation/donation.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';

import { CleanIndiaComponent } from './components/clean-india/clean-india.component';
import { CleanIndiaPostImageComponent } from './components/clean-india/clean-india-post-image/clean-india-post-image.component';
import { CleanImageComponent } from './components/clean-india/clean-image/clean-image.component';

import {FlexLayoutModule} from '@angular/flex-layout';
import {AngularMaterialModule} from './angular-material.module';
import {EnvironmentImagesDataComponent} from './components/environment-images-data/environment-images-data.component';
import {ImageListComponent} from './components/environment-images-data/image-list/image-list.component';
import {PostImageDetailsComponent} from './components/environment-images-data/post-image-details/post-image-details.component';
import {EnvImageCategoryComponent} from './components/environment-images-data/env-image-category/env-image-category.component';
import {EnvironmentAdminComponent} from './components/environment-admin/environment-admin.component';
import {EnvironmentPostDailytasksFormComponent} from './components/environment-admin/environment-post-dailytasks-form/environment-post-dailytasks-form.component';
import {EnvironmentFormListComponent} from './components/environment-admin/environment-form-list/environment-form-list.component';
import {ImagesComponent} from './components/images/images.component';
import {ImageComponent} from './components/images/image/image.component';
import {PhotolistComponent} from './components/images/photolist/photolist.component';
import {FeedComponent} from './components/images/feed/feed.component';


import {FitnessDetailsComponent} from "./components/fitness-details/fitness-details.component";



import { AngularFireAuth } from '@angular/fire/auth';
import { AlertService } from './components/volunteer/shared/alert.service';
import { LoadingService } from './components/volunteer/shared/loading.service';
import { AuthService } from './components/volunteer/shared/auth.service';
import { ChatroomService } from './components/volunteer/shared/chatroom.service';
import { AuthGuard } from './components/volunteer/guards/auth.guard';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
//import { AuthenticationModule } from './components/volunteer/authentication/authentication.module';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { SignupComponent } from './components/volunteer/pages/signup/signup.component';
import { LoginvComponent } from './components/volunteer/pages/loginv/loginv.component';
import { CertificatesComponent } from './components/volunteer/certificates/certificates.component';
import { CertificateComponent } from './components/volunteer/certificates/certificate/certificate.component';
import { CertificateListComponent } from './components/volunteer/certificates/certificate-list/certificate-list.component';
import { CategorySelectorComponent } from './components/volunteer/certificates/category-selector/category-selector.component';
import { CategoryEventsComponent } from './components/volunteer/Events/category-events/category-events.component';
import { EventCardsComponent } from './components/volunteer/Events/event-cards/event-cards.component';
import { ChatComponent } from './components/volunteer/pages/chat/chat.component';
import { ChatInputComponent } from './components/volunteer/pages/chat/chatComponents/chat-input/chat-input.component';
import { ChatroomListComponent } from './components/volunteer/pages/chat/chatComponents/chatroom-list/chatroom-list.component';
import { ChatroomTitleBarComponent } from './components/volunteer/pages/chat/chatComponents/chatroom-title-bar/chatroom-title-bar.component';
import { ChatMessageComponent } from './components/volunteer/pages/chat/chatComponents/chat-message/chat-message.component';
import { ChatroomWindowComponent } from './components/volunteer/pages/chat/chatComponents/chatroom-window/chatroom-window.component';
import { NgxLoadingModule } from 'ngx-loading';
import { AlertModule } from 'ngx-bootstrap';
import { DocPipe } from './doc.pipe';
import { NavbarvComponent } from './components/volunteer/navbarv/navbarv.component';
import { VolunteerHomeComponent } from './components/volunteer/volunteer-home/volunteer-home.component';
import { VolunteerDashboardComponent } from './components/volunteer/volunteer-dashboard/volunteer-dashboard.component';
import { VolunteerFocusComponent } from './components/volunteer/volunteer-focus/volunteer-focus.component';
import { EnvironmentAdminService } from './services/environment-admin.service';
@NgModule({
  declarations: [
    AppComponent,
    UserProfileDetailsFormComponent,
    UserProfileUpdateFormComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    BecomePartnerComponent,
    UserHomeProfileComponent,
    FitnessHomeComponent,
    FitnessDashboardComponent,
    FitnessFocusComponent,
    FitnessDetailsComponent,
    UserHomeProfileComponent,
    EnvironmentMainComponent,
    EnvironmentTicketListComponent,
    EnvironmentImagesDataComponent,
    ImageListComponent,
    PostImageDetailsComponent,
    EnvironmentDashboardProfileComponent,
    EnvironmentQuotesComponent,
    EnvironmentHomeComponent,
    PhotolistComponent,
    ImageComponent,
    ImagesComponent,
    FeedComponent,
    DonationComponent,
    EnvImageCategoryComponent,
    EnvironmentAdminComponent,
    EnvironmentPostDailytasksFormComponent,
    EnvironmentFormListComponent,
    LoginComponent,
    RegisterComponent,



    EnvImageCategoryComponent,


    EnvImageCategoryComponent,

    AppComponent,LoginvComponent, LoginComponent, SignupComponent, CertificatesComponent, CertificateComponent, CertificateListComponent, DocPipe, CategorySelectorComponent, CategoryEventsComponent, EventCardsComponent, ChatComponent, NavbarvComponent, ChatInputComponent, ChatroomListComponent, ChatroomTitleBarComponent, ChatMessageComponent, ChatroomWindowComponent, VolunteerHomeComponent, VolunteerDashboardComponent, VolunteerFocusComponent,
    CleanIndiaComponent,
    CleanIndiaPostImageComponent,
    CleanImageComponent



  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    AngularFireModule.initializeApp(environment.firebaseConfig1),
    AngularFireModule.initializeApp(environment.firebaseConfig3),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    NgbModule,
    AngularFontAwesomeModule,
    MDBBootstrapModule.forRoot(),
    FlexLayoutModule,
    AngularMaterialModule,
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    NgxLoadingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([]),
    AlertModule.forRoot(),
  
    ReactiveFormsModule,
    AngularFirestoreModule
  ],


  providers: [UserServiceService, LoginServiceService, PartnerServiceService, EnvironmentImageService, EnvironmentTicketService,AngularFireAuth,
    AngularFireDatabase,
    AlertService, LoadingService , AuthService, ChatroomService, AuthGuard,EnvironmentAdminService],


  bootstrap: [AppComponent]
})

export class AppModule {
}
