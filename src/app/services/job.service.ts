import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Job } from '../Models/job';
import { Api_Url} from '../../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private _http: HttpClient) { }

  getJobs() {
    return this._http.get(`${Api_Url}/api/job/display`, {headers: this.getHeaders()});
  }

  getJobsByType(id: number) {
    return this._http.get(`${Api_Url}/api/job/displaybytype/?type=${id}`, {headers: this.getHeaders()});
  }

  createJob(job: Job) {
    return this._http.post(`${Api_Url}/api/job`, job, { headers:  this.getHeaders()});
   }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${(localStorage.getItem('token'))}`);
  }

  getJob(id: string) {
    return this._http.get(`${Api_Url}/api/job/id/?id=${id}`, { headers: this.getHeaders() });
  }

  deleteJob(id: number) {
    return this._http.delete(`${Api_Url}/api/job/?id=${id}`, { headers: this.getHeaders()});
  }

  updateJob(job: Job){
    return this._http.put(`${Api_Url}/api/job/?id=${job.JobEntityId}`, job, { headers: this.getHeaders() });
  }

}
