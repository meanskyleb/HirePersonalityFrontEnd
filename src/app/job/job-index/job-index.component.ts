import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';
import { job } from 'src/app/Models/job';
import { MatTableDataSource } from '@angular/material';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-job-index',
  templateUrl: './job-index.component.html',
  styleUrls: ['./job-index.component.css']
})
export class JobIndexComponent implements OnInit {

  constructor(private _jobService: JobService) { }
  
  coulumnNames = ['EntityId', 'Name','Company','Desc','Compensation', 'Hours', 'DesiredPersonality', 'OwnerId']

  dataSource: MatTableDataSource<job>

  ngOnInit() {
    this._jobService.getJobs().subscribe((jobs: job[]) => {
    this.dataSource = new MatTableDataSource<job>(jobs) });
  }
}
