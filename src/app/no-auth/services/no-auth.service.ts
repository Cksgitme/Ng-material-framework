import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { WrapperInputModel } from 'src/app/core/models/wrapper-input-model';
import { WrapperOutputModel } from 'src/app/core/models/wrapper-output-model';
import { UserProfileModel } from 'src/app/shared/models/user-profile.model';
import { environment } from 'src/environments/environment';
import { LoginModel } from '../models/login.model';

const apiBaseUrl: string = environment.apiBaseUrl;

@Injectable({
  providedIn: 'root'
})
export class NoAuthService {

  constructor(private httpClient: HttpClient) { }

  login (data: WrapperInputModel<LoginModel>): Observable<UserProfileModel> {    
    return this.httpClient.post(apiBaseUrl+'FuncAppForCioAppToValidateUser', data).pipe(map(res => res as UserProfileModel));
  }

}
