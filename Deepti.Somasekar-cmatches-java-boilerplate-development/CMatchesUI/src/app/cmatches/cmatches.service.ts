import { Injectable, EventEmitter } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpResponseBase, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CmatchesService {
  apiKeyVal: string = 'AK69qyrbd9VR0nbvEcTo1y8muEU2'
  unique_id: string = '1034809';
  pid: string;

  constructor(private http: HttpClient) { 
  }

  getCalendarDetails(apiKeyVal: string) {
    const headers = new HttpHeaders();
    const url = `https://cricapi.com/api/matchCalendar?apikey=${apiKeyVal}`;
    const query = null;
    return this.http.post<any>(url, query);
  }

  getNewMatchDetails(apiKeyVal: string) {
    const headers = new HttpHeaders();
    const url = `https://cricapi.com/api/matches?apikey=${apiKeyVal}`;
    const query = null;
    return this.http.post<any>(url, query);
  }

  getOldMatchDetails(apiKeyVal: string) {
    const headers = new HttpHeaders();
    const url = `https://cricapi.com/api/cricket?apikey=${apiKeyVal}`;
    const query = null;
    return this.http.post<any>(url, query);
  }

  getScoreDetails(apiKeyVal: string, unique_id: string) {
    const headers = new HttpHeaders();
    const url = `https://cricapi.com/api/cricketScore?apikey=${apiKeyVal}&unique_id=${unique_id}`;
    const query = null;
    return this.http.post<any>(url, query);
  }
  getSquadDetails(apiKeyVal: string, unique_id: string) {
    const headers = new HttpHeaders();
  const url = `https://cricapi.com/api/fantasySquad?apikey=${apiKeyVal}&unique_id=${unique_id}`;

  const query = null;
  return this.http.post<any>(url, query);
}

getSummaryDetails(apiKeyVal: string, unique_id: string) {
  const headers = new HttpHeaders();
  const url = `https://cricapi.com/api/fantasySummary?apikey=${apiKeyVal}&unique_id=${unique_id}`;
  const query = null;
  return this.http.post<any>(url, query);
}

getStatisticDetails(apiKeyVal: string, pid: string) {
  const headers = new HttpHeaders();
  const url = `https://cricapi.com/api/playerStats?apikey=${apiKeyVal}&pid=${pid}`;
  const query = null;
  return this.http.post<any>(url, query);
}
}
