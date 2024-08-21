import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from '../interfaces/Activity';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private apiUrl = 'http://localhost:8080/api/v1';
  constructor(private http:HttpClient) { }

  readAll(): Observable<any> {
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      token,
    });
    return this.http.get<any>(`${this.apiUrl}/cards`, {
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
