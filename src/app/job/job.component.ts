import { Component, OnInit, Input } from '@angular/core';
import { JobService } from '../services/job.service';
import { Job } from '../Models/job';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
constructor(private _jobService: JobService){
  this.onFindJobs();
}

@Input() 
    get jobs(): any {
      return this.jobs
    }
    set jobs(job: any) {
      this.jobs = (job)
    }  

onFindJobs() {
    this._jobService.getJobs().subscribe((job: Job[]) => {
      this.jobs = job;
      this.jobs.reverse();
    })
  }    

 ngOnInit(){
   
    }
}
