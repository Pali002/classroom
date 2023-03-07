// * File: auth.service.ts
// * Author: Zentai Pál
// * Copyright: 2023, Zentai Pál
// * Group: Szoft-II-N
// * Date: 2023-02-07
// * Github: https://github.com/Pali002
// * Licenc: GNU GPL

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
