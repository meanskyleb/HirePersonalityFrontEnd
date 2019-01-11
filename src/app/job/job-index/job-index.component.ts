import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';
import { job } from 'src/app/Models/job';

@Component({
  selector: 'app-job-index',
  templateUrl: './job-index.component.html',
  styleUrls: ['./job-index.component.css']
})
export class JobIndexComponent implements OnInit {

  constructor(private _jobService: JobService) { }

  ngOnInit() {
    this._jobService.getJobs().subscribe((jobs: job[]) => {
    });
  }
}
