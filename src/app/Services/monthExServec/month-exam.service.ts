import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, timer } from 'rxjs';
import { Mexam } from 'src/app/View Model/mexam';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MonthExamService {
  private httpOptions = {};
 year:any
 month:any
  constructor(private http:HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
   }

   addData(y:any,m:any){
this.year=y
this.month=m
console.log(this.year,this.month)
   }
  
  getCounter(tick:any) {
    return timer(0, tick);
  }


  getallMonthExam(): Observable<Mexam[]> {
    return this.http.get<Mexam[]>(environment.APIURL + 'api/monthEx');
  }

  getOneMonthExam(Y:any,M:any): Observable<any> {
    let date={year:Y,month:M}
    return this.http.post<any>(environment.APIURL + 'api/monthEx/oneMexam',date,this.httpOptions);
  }

  gotoExam(Eid:any):Observable<any>{
    return this.http.put<any>(environment.APIURL + 'api/monthEx/'+Eid,this.httpOptions);
  }

  AddReportUserMonthExam(Tid:any,res:any,status:any):Observable<Mexam> {
    let result={result:res,status:status}
    return this.http.post<Mexam>(environment.APIURL + 'api/monthEx/adddegree/'+Tid,result,this.httpOptions);
    
  }
}
