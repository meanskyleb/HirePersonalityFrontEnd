import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';
import { Job } from 'src/app/Models/job';
import { MatTableDataSource } from '@angular/material';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-job-index',
  templateUrl: './job-index.component.html',
  styleUrls: ['./job-index.component.css']
})
export class JobIndexComponent implements OnInit {

  constructor(private _jobService: JobService) { }
  
  columnNames = ['JobEntityId', 'Name','Company','Desc','Compensation', 'Hours', 'DesiredPersonality', 'OwnerId', 'buttons'];

  dataSource: MatTableDataSource<Job>

  ngOnInit() {
    this._jobService.getJobs().subscribe((jobs: Job[]) => {
      this.dataSource = new MatTableDataSource<Job>(jobs) 
  });
  }
}
