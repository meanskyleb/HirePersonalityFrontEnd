import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { JobService } from '../.././services/job.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-create',
  templateUrl: './job-create.component.html',
  styleUrls: ['./job-create.component.css']
})
export class JobCreateComponent implements OnInit {
 


  jobForm: FormGroup;

  constructor(private _jobService: JobService, private _form: FormBuilder) {
    
   }

  ngOnInit() {
  this.createForm();}


 createForm() {
    this.jobForm = this._form.group({
      Name: new FormControl,
      Company: new FormControl,
      Desc: new FormControl,
      Compensation: new FormControl,
      Hours: new FormControl,
      DesiredPersonality: new FormControl
    });
  }

  onSubmit() {
    this._jobService.createJob(this.jobForm.value);
  }
}
