import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Personality} from 'src/app/Models/personality';
import { Api_Url} from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PersonalityService {


  constructor(private _http: HttpClient) { }

  getPersonality() {
    return this._http.get(`${Api_Url}/api/personality/display`, {headers: this.getHeaders()});
  }


private getHeaders() {
  return new HttpHeaders().set(`Authorization`, `Bearer ${localStorage.getItem(`token`)}`);
}


createPersonality(personality: Personality) {
  return this._http.post(`${Api_Url}/api/personality/create`, personality, {headers: this.getHeaders()});
}


getPersonalitybyId(id: string) {
  return this._http.get(`${Api_Url}/api/personality/id/?id=${id}`, {headers: this.getHeaders() });
}


updatePersonality(personality: any) {
  return this._http.put(`${Api_Url}api/personality/`, personality, {headers: this.getHeaders() });
}
  
deletePersonality() {
  return this._http.delete(`${Api_Url}/api/personality/Delete`, {headers: this.getHeaders()});
}

getPersonalityType() {
   return this._http.get(`${Api_Url}/api/Personality/Type` , {headers: this.getHeaders()});
  }
}
