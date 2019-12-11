import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisteruserService {

  constructor(private http: HttpClient) { }
  registerUser(body) {

   return this.http.post('http://localhost:8094/register', body);
  }

}
