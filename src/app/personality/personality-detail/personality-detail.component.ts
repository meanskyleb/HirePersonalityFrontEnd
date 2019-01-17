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
      this._personalityService.getPersonalityType().subscribe((p: number) => {
        this.personalityType = p;
      });
  }
    EntryLevel()
    {
      if (this.personalityType === 1)
      return true;
      else return false;
    }
    SecondLevel() 
    {
        if(this.personalityType === 2)
        return true;
        else return false;
    }
    ThirdLevel() 
    {
      if(this.personalityType === 3)
      return true;
      else return false;
    }
    FourthLevel() 
    {
      if(this.personalityType === 4)
      return true;
      else return false;
    }
    
  }



