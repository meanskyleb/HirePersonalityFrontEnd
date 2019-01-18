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
      Design: new FormControl,
      Problem: new FormControl,
      Picture: new FormControl,
      Minutiae: new FormControl,
      Leadership: new FormControl,
      Teamwork: new FormControl,
      Conversation: new FormControl,
      Technical: new FormControl,
      Relationship: new FormControl,
      Independent: new FormControl,
      PublicSpeaking: new FormControl,
      Quick: new FormControl
    });
  }

  onSubmit(form) {
    const updatePersonality: Personality = {
      PersonalityEntityId: this.personality.PersonalityEntityId,
      PersonalityType: this.personality.PersonalityType,
      Design: form.value.Design,
      Problem: form.value.Problem,
      Picture: form.value.Picture,
      Minutiae: form.value.Minutiae,
      Leadership: form.value.Leadership,
      Teamwork: form.value.Teamwork,
      Conversation: form.value.Conversation,
      Technical: form.value.Technical,
      Relationship: form.value.Relationship,
      Independent: form.value.Independent,
      PublicSpeaking: form.value.PublicSpeaking,
      Quick: form.value.Quick
    };
    this._personalityService.updatePersonality(updatePersonality).subscribe(data => {
      this._router.navigate(['/personality/details']);
    });
  }
}

