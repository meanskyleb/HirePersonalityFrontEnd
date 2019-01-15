import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Personality} from 'src/app/Models/personality';

const ApiUrl = 'https://localhost:44311/api';

@Injectable({
  providedIn: 'root'
})
export class PersonalityService {


  constructor(private _http: HttpClient) { }

  getPersonality() {
    return this._http.get(`${ApiUrl}/Personality/display`, {headers: this.getHeaders()});
  }


private getHeaders() {
  return new HttpHeaders().set(`Authorization`, `Bearer ${localStorage.getItem(`token`)}`);
}


createPersonality(personality: Personality) {
  return this._http.post(`${ApiUrl}/Personality`, personality, {headers: this.getHeaders()});
}


getPersonalitybyId(id: string) {
  return this._http.get(`${ApiUrl}/Personality/${id}`, {headers: this.getHeaders() });
}


updatePersonality(personality: Personality) {
  return this._http.put(`${ApiUrl}/Personality`, personality, {headers: this.getHeaders() });
}
  
deletePersonality(id: number) {
  return this._http.delete(`${ApiUrl}/Personality${id}`, {headers: this.getHeaders()});
}


}