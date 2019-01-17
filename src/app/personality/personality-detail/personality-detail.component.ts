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
  personalityType: number;

  constructor(private _activatedRoute: ActivatedRoute, private _personalityService: PersonalityService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._personalityService.getPersonalityType(routeData.get('id')).subscribe((singlePersonality: Personality) => {
        this.personality = singlePersonality;
      })
    });
    this.personality.getPersonalityType, [1,2,3,4];
    [ActivatedRoute]
  }
    EntryLevel()
    {
      if (this.personality.getPersonalityType === 1)
      return true;
      else return false;
    }
    SecondLevel() 
    {
        if(this.personality.getPersonalityType === 2)
        return true;
        else return false;
    }
    ThirdLevel() 
    {
      if(this.personality.getPersonalityType === 3)
      return true;
      else return false;
    }
    FourthLevel() 
    {
      if(this.personality.getPersonalityType === 4)
      return true;
      else return false;
    }
    
  }



