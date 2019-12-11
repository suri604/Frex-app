import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  constructor(private http: HttpClient) { }
  authenticateUser(body) {
    console.log('came here');
    return this.http.post('http://localhost:8094/authenticate', body);
  }

  getdetails(username){
    console.log('came in post')
    return this.http.post('http://localhost:8094/info', username);
}
}
