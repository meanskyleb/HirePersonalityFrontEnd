import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username: string;
  isLoggedIn: boolean;
  isAdminUser: boolean;
  constructor(private _authService: AuthService, private _router: Router) { }

  ngOnInit() {
    this.isLoggedIn = this._authService.currentUser();
    this.isAdminUser = this._authService.isAdminUser();
  }


  onLogout() {
    this._authService.logout();
    this.isLoggedIn = false;
    this._router.navigate(['/login'])
  }
}
