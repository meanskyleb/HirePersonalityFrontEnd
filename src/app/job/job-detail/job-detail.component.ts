import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { JobService } from 'src/app/services/job.service';
import { Job } from 'src/app/Models/job';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {
 
  job: Job;

  constructor(private _activatedRoute: ActivatedRoute, private _jobService: JobService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._jobService.getJob(routeData.get('id')).subscribe((singleJob: Job) => {
        this.job = singleJob;
      });
    });
  }

}
