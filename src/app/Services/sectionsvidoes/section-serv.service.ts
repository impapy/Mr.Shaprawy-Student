import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vidoes } from 'src/app/View Model/vidoes';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SectionServService {
  private httpOptions = {};
  
  constructor(private http:HttpClient) { 
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    

  }

  GetAllVidoesSection(sec:string): Observable<Vidoes[]> {
    return this.http.get<Vidoes[]>(environment.APIURL + 'api/vidoes/'+sec);
  }
  GetVidoebyid(id:string): Observable<Vidoes> {
    return this.http.get<Vidoes>(environment.APIURL + 'api/vidoes/one/'+id);
  }
  GetVidoetestbyid(id:string): Observable<Vidoes> {
    return this.http.get<Vidoes>(environment.APIURL + 'api/vidoes/test/'+id);
    
  }

  addreportusertestvideos(Vid:any,res:any):Observable<Vidoes> {
    let result={result:res}
    return this.http.post<Vidoes>(environment.APIURL + 'api/vidoes/adddegree/'+Vid,result,this.httpOptions);
    
  }

getHWV(id:string): Observable<Vidoes> {
  return this.http.get<Vidoes>(environment.APIURL + 'api/vidoes/homework/'+id);
  
}

getSolutionForHWV(id:string): Observable<any> {
  return this.http.get<any>(environment.APIURL + 'api/vidoes/solution/'+id);
  
}


TestGetAllVidoesSection(yeay:any,res:any):Observable<Vidoes> {
  let result={Vid:res}
  return this.http.post<Vidoes>(environment.APIURL + 'api/vidoes/select/'+yeay,result,this.httpOptions);
  
}
}
