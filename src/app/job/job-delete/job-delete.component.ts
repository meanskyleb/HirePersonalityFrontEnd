import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Job } from 'src/app/Models/job';

@Component({
  selector: 'app-job-delete',
  templateUrl: './job-delete.component.html',
  styleUrls: ['./job-delete.component.css']
})
export class JobDeleteComponent implements OnInit {

job: Job;

  constructor(private _jobService: JobService, private _ar: ActivatedRoute, private _router: Router) {
    this._ar.paramMap.subscribe(p => {
      this._jobService.getJob(p.get('id')).subscribe((singleJob: Job) => {
        this.job = singleJob;
      });
    });
   }

  ngOnInit() {
  }

  onDelete() {
    this._jobService.deleteJob(this.job.JobEntityId).subscribe(() => {
      this._router.navigate(['/job']);
    });
  }
}
