import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, UrlSegment } from '@angular/router';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Users } from 'src/app/View Model/users';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  private isLogged!: boolean;

  private loggedStatus = new BehaviorSubject<any>(false);
  public userNameStore = new BehaviorSubject<string>("");
  public userName$ = this.userNameStore.asObservable();
  httpOptions = {};
  private config = {};

  authToken: any;
  constructor(
    private toastr: ToastrService,
    private http: HttpClient,
    public router: Router
  ) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    this.config = { headers:{

      // reportProgress: true,
      // observe: 'events' //
      'content-type': 'multipart/form-data; boundary=--------------------------037384031508980924639346'

    }};
  }

  signup(user:FormData): Observable<Users> {
    return this.http.post<Users>(`${environment.APIURL}api/auth/signup`, user)
      .pipe(
      catchError(this.handleError)
      )
    }


    // "name": "TisT#123i",
    // "email": "TisT#123i@gmail.com",
    // "phone": "01021212131",
    // "password": "TisT#123i"

  signIn(user:Users):any{
    this.http.post<Users>(`${environment.APIURL}api/auth/login`, user, this.httpOptions)
    .subscribe((res: any) => {
      this.toastr.success(`Hello again, ${res.user.name}`);
      if(res.user && res.token){
        localStorage.setItem('access_token', res.token)
        localStorage.setItem('user', JSON.stringify(res.user))
        this.isLogged=true;
        this.loggedStatus.next(this.isLogged);
        this.userNameStore.next(res.user.name);
        // this.storageService.setItem('name',res.user.name)
        this.router.navigate(['/Home'])
      }
      return res.user
    },(err)=>{
    
      this.toastr.error(`${err.error}`)
    })
  }
  getUserName():Observable<string>{
    return this.userNameStore;
  }

  get Token():any {
    return localStorage.getItem('access_token');
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return (authToken !== null) ? true : false;
  }
  isLoggedStatus():Observable<any>
  {
      return this.loggedStatus;
  }

  Logout() {
    this.toastr.warning(`Bye Bye...`)
    this.http.get(`${environment.APIURL}api/auth/logout`).subscribe(d=>{
    })
    localStorage.removeItem('access_token')
    localStorage.removeItem('user')
    if (localStorage.removeItem('access_token') == null) {
      this.isLogged=false;
      this.loggedStatus.next(false);
      this.router.navigate(['/User/login']);
    }
  }

  // Error
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }

  // success
  checktestvidio(Vid:any):Observable<boolean> {
    return this.http.get<boolean>(environment.APIURL + 'api/users/checktest/'+Vid);
  }
  gettestuser(Vid:any):Observable<any> {
    return this.http.get<any>(environment.APIURL + 'api/users/success/'+Vid);
  }

  checkmonthExan(Vid:any):Observable<boolean> {
    return this.http.get<boolean>(environment.APIURL + 'api/users/checkexam/'+Vid);
  }

  getMonthExan(Vid:any):Observable<any> {
    return this.http.get<any>(environment.APIURL + 'api/users/succMonthExam/'+Vid);
  }

  getUserReport():Observable<any> {
    return this.http.get<any>(environment.APIURL + 'api/users/report/use');
  }

  getvravstudent():Observable<any> {
    return this.http.get<any>(environment.APIURL + 'api/users/brav/use');
  }


////////////////////control//////////////////

getuserdetails():Observable<Users> {
  return this.http.get<Users>(environment.APIURL + 'api/users/details');
}


editname(na:any):Observable<any>{
  let ednam={name:na}
  return this.http.put<any>(environment.APIURL + 'api/users/editname',ednam,this.httpOptions);
}

editemail(em:any):Observable<any>{
  let enus={email:em}
  return this.http.put<any>(environment.APIURL + 'api/users/editemail',enus,this.httpOptions);
}

edityear(na:any):Observable<any>{
  let ednam={yearstude:na}
  return this.http.put<any>(environment.APIURL + 'api/users/edityear',ednam,this.httpOptions);
}

editphone(na:any):Observable<any>{
  let ednam={phone:na}
  return this.http.put<any>(environment.APIURL + 'api/users/editpone',ednam,this.httpOptions);
}

editpass(na:any):Observable<any>{
  let ednam={password:na}
  return this.http.put<any>(environment.APIURL + 'api/users/editpass',ednam,this.httpOptions);
}

editimage(na:FormData):Observable<any>{
  return this.http.put<any>(environment.APIURL + 'api/users/editimage',na);
}







//////////////////////////////////////////////




}
