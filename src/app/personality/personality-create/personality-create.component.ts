import { Component, OnInit, createPlatformFactory } from '@angular/core';
import { PersonalityService } from 'src/app/services/personalityservice/personality.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personality-create',
  templateUrl: './personality-create.component.html',
  styleUrls: ['./personality-create.component.css']
})
export class PersonalityCreateComponent implements OnInit {

  personalityForm: FormGroup;
  
  constructor(private _personalityservice: PersonalityService, private _form: FormBuilder, private _router: Router) {}
   

  ngOnInit() {
    this.createForm();
  }




createForm() {
  this.personalityForm = this._form.group({
    PersonalityId: new FormControl,
    PersonalityType: new FormControl
  });
}

onSubmit() {
  this._personalityservice.createPersonality(this.personalityForm.value).subscribe(data => {
    this._router.navigate(['/personality']);
  });
}
}