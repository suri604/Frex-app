import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { LoginServiceService } from './services/login-service.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeProfileComponent } from './components/user-home-profile/user-home-profile.component';
import { HomeComponent } from './components/home/home.component';
import { BecomePartnerComponent } from './components/become-partner/become-partner.component';
import { FitnessHomeComponent } from './components/fitness-home/fitness-home.component';
import { EnvironmentTicketListComponent } from './components/environment-ticket-list/environment-ticket-list.component';
import { EnvironmentMainComponent } from './components/environment-main/environment-main.component';
import { UserProfileDetailsFormComponent } from './components/user-profile-details-form/user-profile-details-form.component';
import { UserProfileUpdateFormComponent } from './components/user-profile-update-form/user-profile-update-form.component';
import { DonationComponent } from './components/donation/donation.component';
import { EnvironmentHomeComponent } from './components/environment-home/environment-home.component';
import { PostImageDetailsComponent } from './components/environment-images-data/post-image-details/post-image-details.component';
import { EnvironmentImagesDataComponent } from './components/environment-images-data/environment-images-data.component';
import { ImageListComponent } from './components/environment-images-data/image-list/image-list.component';
import { EnvImageCategoryComponent } from './components/environment-images-data/env-image-category/env-image-category.component';
import { EnvironmentAdminComponent } from './components/environment-admin/environment-admin.component';
import { EnvironmentPostDailytasksFormComponent } from './components/environment-admin/environment-post-dailytasks-form/environment-post-dailytasks-form.component';
import { EnvironmentFormListComponent } from './components/environment-admin/environment-form-list/environment-form-list.component';
import { CleanIndiaComponent } from './components/clean-india/clean-india.component';
import { CleanIndiaPostImageComponent } from './components/clean-india/clean-india-post-image/clean-india-post-image.component';
import { CleanImageComponent } from './components/clean-india/clean-image/clean-image.component';
import { ImagesComponent } from './components/images/images.component';
import { ImageComponent } from './components/images/image/image.component';
import { PhotolistComponent } from './components/images/photolist/photolist.component';
import { FeedComponent } from './components/images/feed/feed.component';

import { CertificatesComponent } from './components/volunteer/certificates/certificates.component';
import { CertificateComponent } from './components/volunteer/certificates/certificate/certificate.component';
import { CertificateListComponent } from './components/volunteer/certificates/certificate-list/certificate-list.component';
import { CategorySelectorComponent } from './components/volunteer/certificates/category-selector/category-selector.component';
import { SignupComponent } from './components/volunteer/pages/signup/signup.component';
import { ChatComponent } from './components/volunteer/pages/chat/chat.component';
import { AuthGuard } from './components/volunteer/guards/auth.guard';
import { LoginvComponent } from './components/volunteer/pages/loginv/loginv.component';
import { CategoryEventsComponent } from './components/volunteer/Events/category-events/category-events.component';
import { EventCardsComponent } from './components/volunteer/Events/event-cards/event-cards.component';
import { VolunteerHomeComponent } from './components/volunteer/volunteer-home/volunteer-home.component';
import { FitnessDetailsComponent } from './components/fitness-details/fitness-details.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'addpartner', component: BecomePartnerComponent},
  {path: 'user-profile', component: UserHomeProfileComponent},
  {path: 'fitness', component: FitnessHomeComponent},
  {path: 'fitness-details/:activity', component: FitnessDetailsComponent},
  {path: 'details/update/:id', component: UserProfileDetailsFormComponent},
  {path: 'details/:id', component: UserProfileUpdateFormComponent},
  {path: 'donation', component: DonationComponent},
  {path: 'environment', component: EnvironmentHomeComponent},
  {path: 'environment/main/getTicket', component: EnvironmentTicketListComponent},
  {path: 'environment/main', component: EnvironmentMainComponent},
  {path: 'environment/main/save', component: PostImageDetailsComponent},
  {path: 'environment/main/save/envcategory', component: EnvImageCategoryComponent},
  {
    path: 'environment/main/save/image', component: EnvironmentImagesDataComponent, children: [
      {path: 'list', component: ImageListComponent}
    ]
  },
  {
    path: 'image', component: ImagesComponent, children: [
      {path: 'upload', component: ImageComponent},
      {path: 'list', component: PhotolistComponent},
      {path: 'feed', component: FeedComponent},
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  
   { path: 'env/admin', component: EnvironmentAdminComponent, children: [
      {path: 'upload', component: EnvironmentPostDailytasksFormComponent},
      {
        path: 'list', component: EnvironmentFormListComponent
      }

    ]
  },
      
    
    {
      path: 'certificates', component: CertificatesComponent, children: [
        {path: 'uploadCertificate', component: CertificateComponent},
        {
          path: 'certificateList', component: CertificateListComponent, children: [
            {path: 'categorySelector', component: CategorySelectorComponent}
          ]
        }
      ]
    },
    {path: 'loginv', component: LoginvComponent},
  {path: 'signup', component: SignupComponent},
  {
    path: 'chat/:chatroomId', component: ChatComponent, canActivate: [AuthGuard],
  },
  {path: 'categoryEvents', component: CategoryEventsComponent},
  {path: 'eventCards', component: EventCardsComponent},

  {path: 'volunteer', component: VolunteerHomeComponent},

   {  path : 'cleanindia', component : CleanIndiaComponent, children: [
        {path:'upload', component: CleanIndiaPostImageComponent},
        {path: 'list', component: CleanImageComponent}
      ]
    }

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [LoginServiceService],
  exports: [RouterModule]
})

export class AppRoutingModule {

  message=0;
  receiveMessage($event){
    this.message=$event;
    console.log(this.message);
  } 
}
