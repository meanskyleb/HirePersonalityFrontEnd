import { Component, OnInit } from '@angular/core';
import { PersonalityService } from 'src/app/services/personalityservice/personality.service';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-personality-delete',
  templateUrl: './personality-delete.component.html',
  styleUrls: ['./personality-delete.component.css']
})
export class PersonalityDeleteComponent implements OnInit {
  
  constructor(private _personalityService: PersonalityService, private _router: Router) {
  }

  ngOnInit() {
  }

  onDelete() {
    this._personalityService.deletePersonality().subscribe(() => {
      this._router.navigate(['/personality/index']);
    });
  }
}
