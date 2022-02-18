import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Users } from '../View Model/users';
import { Vidoes } from '../View Model/vidoes';

@Injectable({
  providedIn: 'root'
})
export class HomeServService {
  private httpOptions = {};
  constructor(private http:HttpClient) { 
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  }

  GetAllVidoes(): Observable<Vidoes[]> {
    return this.http.get<Vidoes[]>(environment.APIURL + 'api/vidoes');
  }

  GetInformationAdmin(): Observable<any> {
    return this.http.get<any>(environment.APIURL + 'api/admins/detailsadmin/foruser');
  }


 
}

