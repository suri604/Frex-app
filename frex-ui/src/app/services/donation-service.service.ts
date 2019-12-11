import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DonationService {
  

  constructor(private http : HttpClient) { }

donation(body){
  console.log('came here',body);

return this.http.post('http://localhost:8095/rest/users/donate',body);
}
// donation(token: body) {
//   // const headers = new HttpHeaders({'token': token});
//   this.http.post('http://localhost:8095/rest/users/donate', token,  {responseType: 'text'})
//     .subscribe(resp => {
//       console.log(resp);
//     })
// }
}
