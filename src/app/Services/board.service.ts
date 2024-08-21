import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Board } from '../interfaces/Board';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  private apiUrl = 'http://localhost:8080/api/v1';
  constructor(private http:HttpClient) { }

 // create(data: Notification[]): Observable<any> {
 //   const token = localStorage.getItem('token') || '';
 //   const headers = new HttpHeaders({
 //     'Content-Type': 'application/json',
 //     token,
 //   });
 //   return this.http.post<any>(`${this.apiUrl}/lists`, data, { headers });
 // }
  readAll(): Observable<any> {
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      token,
    });
    return this.http.get<any>(`${this.apiUrl}/boards`, {
      headers,
    });
  }
  create(data: Board): Observable<any> {
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      token,
    });
    return this.http.post<any>(`${this.apiUrl}/boards`, data, { headers });
  }

  private reload = signal<boolean>(true);

  setReload() {
    this.reload.update((value) => !value);
  }
  getReload() {
    return this.reload;
  }
}
