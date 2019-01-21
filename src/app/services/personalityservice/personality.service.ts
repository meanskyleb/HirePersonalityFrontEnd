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
    return this._http.get(`${ApiUrl}/personality/display`, {headers: this.getHeaders()});
  }


private getHeaders() {
  return new HttpHeaders().set(`Authorization`, `Bearer ${localStorage.getItem(`token`)}`);
}


createPersonality(personality: Personality) {
  return this._http.post(`${ApiUrl}/personality/create`, personality, {headers: this.getHeaders()});
}


getPersonalitybyId(id: string) {
  return this._http.get(`${ApiUrl}/personality/id/?id=${id}`, {headers: this.getHeaders() });
}


updatePersonality(personality: Personality) {
  return this._http.put(`${ApiUrl}/personality/update`, personality, {headers: this.getHeaders() });
}
  
deletePersonality() {
  return this._http.delete(`${ApiUrl}/personality/Delete`, {headers: this.getHeaders()});
}

getPersonalityType() {
   return this._http.get(`${ApiUrl}/Personality/Type` , {headers: this.getHeaders()});
  }
}
