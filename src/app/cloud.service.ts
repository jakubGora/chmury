import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CloudService {
  private apiUrl = 'https://backend-dot-cellular-codex-407313.lm.r.appspot.com/clouds';

  constructor(private http: HttpClient) {}

  getClouds(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
