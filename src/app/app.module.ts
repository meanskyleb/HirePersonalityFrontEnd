//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { 
  MatButtonModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatSliderModule,
 } from '@angular/material';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Components
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PersonalityComponent } from './personality/personality.component';
import { PersonalityIndexComponent } from './personality/personality-index/personality-index.component';
import { PersonalityCreateComponent } from './personality/personality-create/personality-create.component';
import { PersonalityDetailComponent } from './personality/personality-detail/personality-detail.component';
import { PersonalityEditComponent } from './personality/personality-edit/personality-edit.component';
import { PersonalityDeleteComponent } from './personality/personality-delete/personality-delete.component';
import { JobComponent } from './job/job.component';
import { JobIndexComponent } from './job/job-index/job-index.component';
import { JobCreateComponent } from './job/job-create/job-create.component';
import { JobDetailComponent } from './job/job-detail/job-detail.component';
import { JobUpdateComponent } from './job/job-update/job-update.component';
import { JobDeleteComponent } from './job/job-delete/job-delete.component';

//Services
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guards';
import { PersonalityService } from './services/personalityservice/personality.service';
import { JobService } from './services/job.service';






const routes = [
  {path: 'registration', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'contact', component: ContactComponent},
  {

    path: 'personality', canActivate: [AuthGuard] , children: [
      { path: 'index', component: PersonalityIndexComponent },
      { path: 'create', component: PersonalityCreateComponent },
      { path: 'details', component: PersonalityDetailComponent },
      { path: 'update/:id', component: PersonalityEditComponent},
      { path: 'delete', component: PersonalityDeleteComponent }
    ] 
  },
  {path: 'job', canActivate: [AuthGuard] , children: [
      {path: 'index', component: JobIndexComponent},
      {path: 'create', component: JobCreateComponent},
      {path: 'details/:id', component: JobDetailComponent},
      {path: 'update/:id', component: JobUpdateComponent},
      {path: 'delete/:id', component: JobDeleteComponent}
]}
]

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    ContactComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    PersonalityComponent,
    PersonalityIndexComponent,
    PersonalityCreateComponent,
    PersonalityDetailComponent,
    PersonalityEditComponent,
    PersonalityDeleteComponent,
    JobComponent,
    JobIndexComponent,
    JobCreateComponent,
    JobDetailComponent,
    JobUpdateComponent,
    JobDeleteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSliderModule,
    RouterModule.forRoot(routes, {onSameUrlNavigation:'reload'}),
    BrowserAnimationsModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    PersonalityService,
    JobService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
