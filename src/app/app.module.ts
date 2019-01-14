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
 } from '@angular/material';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

//Components
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { JobComponent } from './job/job.component';
import { PersonalityComponent } from './personality/personality.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { JobIndexComponent } from './job/job-index/job-index.component';
import { PersonalityCreateComponent } from './personality/personality-create/personality-create.component';
import { PersonalityService } from './services/personalityservice/personality.service';
import { PersonalityIndexComponent } from './personality/personality-index/personality-index.component';
import { JobCreateComponent } from './job/job-create/job-create.component';
import { PersonalityDetailComponent } from './personality/personality-detail/personality-detail.component';
import { PersonalityEditComponent } from './personality/personality-edit/personality-edit.component';
import { JobDetailComponent } from './job/job-detail/job-detail.component';
import { JobDeleteComponent } from './job/job-delete/job-delete.component';
import { PersonalityDeleteComponent } from './personality/personality-delete/personality-delete.component';


//Services
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guards';
import { Observable } from 'rxjs';





const routes = [
  {path: 'registration', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'contact', component: ContactComponent},
  {
    path: 'personality', canActivate: [AuthGuard] , children: [
      { path: '', component: PersonalityIndexComponent },
      { path: 'create', component: PersonalityCreateComponent },
      { path: 'detail/:id', component: PersonalityDetailComponent },
      { path: 'delete/:id', component: PersonalityDeleteComponent }
    ]
  },
  {path: 'job',children: [
      {path: '', component: JobIndexComponent},
      {path: 'create', component: JobCreateComponent},
      {path: 'details/:id', component: JobDetailComponent},
      {path: 'delete/:id', component: JobDeleteComponent}

  ]},
];


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    ContactComponent,
    AboutComponent,
    JobComponent,
    PersonalityComponent,
    HeaderComponent,
    FooterComponent,
    JobIndexComponent,
    PersonalityCreateComponent,
    PersonalityIndexComponent,
    PersonalityDetailComponent,
    PersonalityEditComponent,
    JobCreateComponent,
    JobDetailComponent,
    PersonalityDetailComponent,
    PersonalityIndexComponent,
    PersonalityDeleteComponent,
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
    RouterModule.forRoot(routes),
    AppRoutingModule,
    BrowserAnimationsModule,
    Observable
  ],
  providers: [
    AuthService,
    AuthGuard,
    PersonalityService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
