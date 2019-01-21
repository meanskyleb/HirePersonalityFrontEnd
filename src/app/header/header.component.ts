import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { PersonalityService } from '../services/personalityservice/personality.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username: string;
  isLoggedIn: boolean;
  isAdminUser: boolean;
  testTaken: boolean;
  personalityType: number;
  constructor(private _authService: AuthService, private _router: Router, private _personalityService: PersonalityService) { }

  ngOnInit() {
    this.isLoggedIn = this._authService.currentUser();
    this.isAdminUser = this._authService.isAdminUser();
    this._personalityService.getPersonalityType().subscribe((p: number) => {
      this.personalityType = p;
    this.testTaken = this.checkTheTest(this.personalityType)
    });
  }


  onLogout() {
    this._authService.logout();
    this.isLoggedIn = false;
    this._router.navigate(['/login'])
  }

  checkTheTest(num:number) {
    if(num >= 1 && num <= 4){return true;}
    return false;
    }
}

