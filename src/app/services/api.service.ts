import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }

  loadUsers() {    
    return this.http.get('http://34.122.142.122/api/users');
  }
}
