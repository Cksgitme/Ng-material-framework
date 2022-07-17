import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, filter, map } from "rxjs/operators";
import { environment } from "src/environments/environment";
// import { SecurityService } from '../../securities/security.service';
// import { WrapperOutputModel } from '../models/wrapperOutput.model';
// import { ToastMessageModel } from '../models/toastMessage.model';
// import { UtilityService } from 'src/app/core/services/utility.service';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      // filter(event => event instanceof HttpResponse && request.url.includes(environment.apiBaseUrl)),
      filter((event) => event instanceof HttpResponse),
      map((event: any) => {
        if (request.url.includes(environment.apiBaseUrl)) {
          console.log("with base url");
          return event.clone({ body: event.body.data });
        } else {
          console.log("without base url");
          return event.clone({ body: event.body });
        }
      })
    );
  }
}
