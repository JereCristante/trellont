import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Notification } from '../interfaces/Notification';

@Injectable({
  providedIn: 'root'
})
export class ActivitesService {

  private apiUrl = 'http://localhost:8080/api/v1';
  constructor(private http:HttpClient) { }

  readAll(): Observable<any> {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imp1YW5AZ21haWwuY29tIiwiaWF0IjoxNzIzNjQ1NjA1LCJleHAiOjE3MjM3MzIwMDV9.HZXBnwjsoWTQwktbz_ib_r8b0x0PGs5yUsztQVNgOBc';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      token,
    });
    return this.http.get<any>(`${this.apiUrl}/activities`, {
      headers,
    });
  }
  private reload = signal<boolean>(true);

  setReload() {
    this.reload.update((value) => !value);
  }
  getReload() {
    return this.reload;
  }
}
