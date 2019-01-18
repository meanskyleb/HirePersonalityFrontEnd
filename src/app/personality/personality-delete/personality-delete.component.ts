import { Component, OnInit } from '@angular/core';
import { PersonalityService } from 'src/app/services/personalityservice/personality.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Personality } from 'src/app/Models/personality';

@Component({
  selector: 'app-personality-delete',
  templateUrl: './personality-delete.component.html',
  styleUrls: ['./personality-delete.component.css']
})
export class PersonalityDeleteComponent implements OnInit {

personality: Personality;

  constructor(private _personalityService: PersonalityService, private _ar: ActivatedRoute, private _router: Router) {
    this._ar.paramMap.subscribe(p => {
      this._personalityService.getPersonalitybyId(p.get('id')).subscribe((singlePersonality: Personality) => {
        this.personality = singlePersonality;
        console.log(this.personality)
      });
    });
  }
  ngOnInit() {
  }

  onDelete(id) {
    this._personalityService.deletePersonality(id).subscribe(() => {
      this._router.navigate(['/personality/index']);
    });
  }
}
