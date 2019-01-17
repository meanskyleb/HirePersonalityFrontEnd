import { Component, OnInit, Input } from '@angular/core';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-job-index',
  templateUrl: './job-index.component.html',
  styleUrls: ['./job-index.component.css']
})
export class JobIndexComponent {
  job: {};
constructor(private _jobService: JobService) {}

onFindJobs() : void {
      this._jobService.getJobs().subscribe(Job => {
        this.jobs=Job;
        this.jobs.reverse();
    })
  }    
@Input() 
    get jobs(): any {
      return this.jobs
    }
    set jobs(job: any) {
      this.jobs = (job)
    }  

    ngOnInit(){
      this.onFindJobs();
    }

}
