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

//Components
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';




//Services
import { AuthService } from './services/auth.service';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { JobComponent } from './job/job.component';
import { PersonalityComponent } from './personality/personality.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PersonalityCreateComponent } from './personality/personality-create/personality-create.component';
import { PersonalityService } from './services/personalityservice/personality.service';
import { PersonalityIndexComponent } from './personality/personality-index/personality-index.component';
import { PersonalityDetailComponent } from './personality/personality-detail/personality-detail.component';
import { PersonalityEditComponent } from './personality/personality-edit/personality-edit.component';

const routes = [
  {path: 'registration', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'job', component: JobComponent},
  {path: 'personality', component: PersonalityComponent},
  {path: 'contact', component: ContactComponent},
  {
    path: 'personality', children: [
      { path: '', component: PersonalityIndexComponent },
      { path: 'create', component: PersonalityCreateComponent },
      { path: 'detail/:id', component: PersonalityDetailComponent }
    ]
  },
  { path: '**', component: RegistrationComponent }
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
    PersonalityCreateComponent,
    PersonalityIndexComponent,
    PersonalityDetailComponent,
    PersonalityEditComponent
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
    BrowserAnimationsModule
  ],
  providers: [
    AuthService,
    PersonalityService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
