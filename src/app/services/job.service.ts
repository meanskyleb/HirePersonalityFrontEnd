import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Job } from '../Models/job';

const ApiUrl = "https://localhost:44311/api"

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private _http: HttpClient) { }

  getJobs() {
    return this._http.get(`${ApiUrl}/job/display`, {headers: this.getHeaders()});
  }

  createJob(job: Job) {
    return this._http.post(`${ApiUrl}/job`, job, { headers:  this.getHeaders()});
   }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${(localStorage.getItem('token'))}`);
  }
  getJob(id: string) {
    return this._http.get(`${ApiUrl}/job/id/?id=${id}`, { headers: this.getHeaders() });
  }

  deleteJob(id: number) {
    return this._http.delete(`${ApiUrl}/job/?id=${id}`, { headers: this.getHeaders()});
  }

  updateJob(job: Job){
    return this._http.put(`${ApiUrl}/job`, job, { headers: this.getHeaders() });
  }

}
