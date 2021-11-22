import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bug } from '../pages/admin/bugdetails/bugdetails.component';

@Injectable({
  providedIn: 'root'
})
export class BugService {

  public url = 'http://localhost:8080/admin/pendingBugList';
  public url1 = 'http://localhost:8080/admin/bugList';
  
  constructor(private _http: HttpClient) { }

  retriveBug(){
    return this._http.get<Bug[]>(this.url);
  }

  retriveBug1(){
    return this._http.get<Bug[]>(this.url1);
  }
}
