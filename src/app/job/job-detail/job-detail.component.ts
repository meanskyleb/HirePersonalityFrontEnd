import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { JobService } from 'src/app/services/job.service';
import { job } from 'src/app/Models/job';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {

  constructor(private_activatedRoute: ActivatedRoute, private _jobService: JobService) { }

  ngOnInit() {
    this._activatedRoute.paraMap.subscribe(routeData => {
      this._jobService.getJob(routeData.get('id')).subscribe((singleJob: job) => {
        this.job = singleJob;
      });
    });
  }

}
