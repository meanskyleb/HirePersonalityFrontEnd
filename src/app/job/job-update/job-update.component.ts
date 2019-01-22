import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/Models/job';
import { JobService } from 'src/app/services/job.service';
import { ActivatedRoute} from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router} from '@angular/router'

@Component({
  selector: 'app-job-update',
  templateUrl: './job-update.component.html',
  styleUrls: ['./job-update.component.css']
})
export class JobUpdateComponent implements OnInit {

  job: Job;
  updateJobForm: FormGroup;
  constructor(private _form: FormBuilder,
              private _jobservice: JobService,
              private _ar: ActivatedRoute,
              private _router: Router) { 
                this._ar.paramMap.subscribe(p => {
                  this._jobservice.getJob(p.get('id')).subscribe((singleJob: Job) => {
                    localStorage.setItem("jobEntityId", p.get('id'));
                    this.job = singleJob;
                    this.createForm();
                  })
                })
              }

              
  ngOnInit() {
  }

  createForm() {
    this.updateJobForm = this._form.group({
      JobEntityId: new FormControl(this.job.JobEntityId),
      Name: new FormControl(this.job.Name),
      Company: new FormControl(this.job.Company),
      Desc: new FormControl(this.job.Desc),
      Compensation: new FormControl(this.job.Compensation),
      Hours: new FormControl(this.job.Hours),
      DesiredPersonality: new FormControl(this.job.DesiredPersonality),
    });
  }

  onSubmit(form) {
    const updateJob: Job = {
      JobEntityId: parseInt(localStorage.getItem("jobEntityId")),
      Name: form.value.Name,
      Company: form.value.Company,
      Desc: form.value.Desc,
      Compensation: form.value.Compensation,
      Hours: form.value.Hours,
      DesiredPersonality: form.value.DesiredPersonality,
    };
    console.log(updateJob);
    this._jobservice.updateJob(updateJob).subscribe(d => {
      this._router.navigate(['/job']);
    });
  }

}
