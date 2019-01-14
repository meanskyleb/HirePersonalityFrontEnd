import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Personality } from 'src/app/Models/personality';
import { PersonalityService } from 'src/app/services/personalityservice/personality.service';

@Component({
  selector: 'app-personality-detail',
  templateUrl: './personality-detail.component.html',
  styleUrls: ['./personality-detail.component.css']
})
export class PersonalityDetailComponent implements OnInit {

  personality: Personality;

  constructor(private _activatedRoute: ActivatedRoute, private _personalityService: PersonalityService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._personalityService.getPersonalitybyId(routeData.get('id')).subscribe((singlePersonality: Personality) => {
        this.personality = singlePersonality;
      })
    });
  }
}


