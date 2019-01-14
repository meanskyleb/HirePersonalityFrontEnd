import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { PersonalityService } from 'src/app/services/personalityservice/personality.service';
import { ActivatedRoute } from '@angular/router';
import { Personality } from 'src/app/Models/personality';
import { Router} from '@angular/router'

@Component({
  selector: 'app-personality-edit',
  templateUrl: './personality-edit.component.html',
  styleUrls: ['./personality-edit.component.css']
})
export class PersonalityEditComponent implements OnInit {

personality: Personality;
  editPersonalityForm: FormGroup;
  constructor(private _form: FormBuilder,
              private _personalityService: PersonalityService,
              private _ar: ActivatedRoute,
              private _router: Router) {
    this._ar.paramMap.subscribe(p => {
      this._personalityService.getPersonalitybyId(p.get('id')).subscribe((singlePersonality: Personality) => {
        this.personality = singlePersonality;
        this.createForm();
      });
    });           
  }

  ngOnInit() {
    this.editPersonalityForm;
  }

  createForm() {
    this.editPersonalityForm = this._form.group({
      PersonalityId: new FormControl(this.personality.PersonalityId),
      PersonalityType: new FormControl(this.personality.PersonalityType)
    });
  }

  onSubmit(form) {
    const updatePersonality: Personality = {
      PersonalityId: form.value.PersonalityId,
      PersonalityType: form.value.PersonalityType
    };
    this._personalityService.updatePersonality(updatePersonality).subscribe(d => {
      this._router.navigate(['/personality']);
    });
  }



}

