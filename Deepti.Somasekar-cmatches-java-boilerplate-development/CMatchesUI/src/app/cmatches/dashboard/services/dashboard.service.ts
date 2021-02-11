import { Injectable, EventEmitter } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpResponseBase } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  apiKeyVal: string = 'AK69qyrbd9VR0nbvEcTo1y8muEU2'
  unique_id: string = '1034809';
  pid: string;

  constructor(private http: HttpClient) { 
  }

}
