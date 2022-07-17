import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { SessionService } from '../services/session.service';
import { UserProfileModel } from 'src/app/shared/models/user-profile.model';

@Injectable({
    providedIn:'root'
})
export class RequestInterceptor implements HttpInterceptor {        
    constructor(private sessionService: SessionService) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // delete this.sessionService.stdInputModel.data;
        console.log('interceptor request body', request);
        // this.sessionService.stdInputModel.data = request.body;
        // add auth header with jwt if user is logged in and request is to api url                  
        const isApiUrl = request.url.startsWith(environment.apiBaseUrl);
        const logedInUserData: UserProfileModel | null = this.sessionService.getSessionData();
        const isLoggedIn = logedInUserData && logedInUserData.accessToken;
        let token = logedInUserData && logedInUserData.accessToken ? logedInUserData.accessToken : '';
        // request.body = ''
        if (isLoggedIn && isApiUrl && token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
                // ,
                // body: this.sessionService.stdInputModel
            });
        }
        console.log('new request', request)
        return next.handle(request);
    }
}