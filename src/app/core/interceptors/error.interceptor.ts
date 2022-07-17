import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            let error = err.error && err.error.message ? err.error.message : err.statusText;  
            
            if (err.status === 401) {
                // auto logout if 401 response returned from api               
            }                                     
            if (err.status === 500) {
                error = "Something went wrong!!"
            }

            if (err.status === 0)
            {
                error = "Server not responding!!"
            }
            alert(error);                 
            return throwError(error);
        }))
    }
}