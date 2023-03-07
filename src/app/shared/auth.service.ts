import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  host = 'http://localhost:3000/';

  constructor(private http : HttpClient) { }

  getStudents() {
    let endpoint = 'students';
    let url = this.host + endpoint;
    return this.http.get<any>(url);
  }

  getScores() {
    let endpoint = 'scores';
    let url = this.host + endpoint;
    return this.http.get<any>(url);
  }
}
