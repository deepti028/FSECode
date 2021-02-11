import { Injectable, EventEmitter} from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpResponseBase } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewMatchService {
  apiKeyVal: string = 'AK69qyrbd9VR0nbvEcTo1y8muEU2'

  constructor(private http: HttpClient) { }

  getNewMatchDetails(apiKeyVal: string) {
    const url = `https://cricapi.com/api/matches?apikey=${apiKeyVal}`;
    console.log('url', url);
    const query = null;
    return this.http.post<any>(url, query);
  }
}

