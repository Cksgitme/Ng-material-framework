import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { WrapperInputModel } from 'src/app/core/models/wrapper-input-model';
import { environment } from 'src/environments/environment';
import { CommonListModel } from '../../models/common-list.model';
import { CommonSortFilterModel } from '../../models/common-sort-filter.model';
import { UserModel } from '../../models/user.model';
import { UsersModule } from './users.module';

const apiBaseUrl: string = environment.apiBaseUrl;

@Injectable({
  providedIn: 'root'
})
export class UserService {  
  constructor(private _httpClient: HttpClient) { }

  public getDataForEmployeeGrid(data: WrapperInputModel<CommonSortFilterModel>): Observable<CommonListModel<UserModel[]>> {
    return this._httpClient.post(apiBaseUrl +'FuncAppForCioAppToGetActiveEmployeeList', data)
    .pipe(map(response => response as CommonListModel<UserModel[]>))    
  };
}
