import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const ApiUrl = "https://localhost:44311/api/values"

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private _http: HttpClient) { }

  getJobs() {
    return this._http.get(`${ApiUrl}/job`, {headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer $(localStorage.getItem('id_token')}`)
  }
  getJob(id: string) {
    return this._http.get(`${ApiUrl}/job/${id}`, { headers: this.getHeaders() });
  }
}
