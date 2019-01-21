import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Personality } from 'src/app/Models/personality';
import { PersonalityService } from 'src/app/services/personalityservice/personality.service';
import { MatTableDataSource } from '@angular/material';
import { Job } from 'src/app/Models/job';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-personality-detail',
  templateUrl: './personality-detail.component.html',
  styleUrls: ['./personality-detail.component.css']
})
export class PersonalityDetailComponent implements OnInit {

  personality;
  personalityType: number;

  constructor(private _activatedRoute: ActivatedRoute, private _personalityService: PersonalityService, private _jobService: JobService) { }
  
  columnNames = ['JobEntityId', 'Name', 'Company', 'Desc', 'Compensation', 'Hours'];

  dataSource: MatTableDataSource<Job>


  ngOnInit() {
      this._personalityService.getPersonalityType().subscribe((p: number) => {
        this.personalityType = p;
        console.log(p);
        this.getPersonality(p); 

      this._jobService.getJobsByType(this.personalityType).subscribe((jobs: Job[]) => {
        this.dataSource = new MatTableDataSource<Job>(jobs)
      });
    });
  }

    EntryLevel()
    {
      if (this.personalityType === 1)
      return true;
      else return false;
    }
    SecondLevel() 
    {
        if(this.personalityType === 2)
        return true;
        else return false;
    }
    ThirdLevel() 
    {
      if(this.personalityType === 3)
      return true;
      else return false;
    }
    FourthLevel() 
    {
      if(this.personalityType === 4)
      return true;
      else return false;
    }
    getPersonality(id){
      this._personalityService.getPersonalitybyId(id).subscribe(p => {
        this.personality=p;
      });
    }
  
 
 
  }



