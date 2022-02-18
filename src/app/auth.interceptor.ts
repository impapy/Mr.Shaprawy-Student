import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { UserAuthService } from './Services/user/user-auth.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private authService: UserAuthService,
    private spinner: NgxSpinnerService
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('access_token');
    if (token) {
      request = request.clone({
        headers: request.headers.set('authorization', this.authService.Token)
      });
    }
  
    return next.handle(request).pipe(
      retry(1),
      catchError(
        (err) => {
          request = request.clone({
            headers: request.headers.set('authorization', this.authService.Token)
          });
          if (err instanceof HttpErrorResponse) {
            if (err.status === 405) {
              this.authService.Logout();
            }
          }
          return throwError(err)
        }
      )
    )

  }
}
export const AuthInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true,
};