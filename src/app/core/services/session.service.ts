import { Injectable } from '@angular/core';
import { UserProfileModel } from 'src/app/shared/models/user-profile.model';
import { WrapperInputModel } from '../models/wrapper-input-model';
import { WrapperOutputModel } from '../models/wrapper-output-model';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  stdInputModel: WrapperInputModel<any>;
  constructor() {
    this.stdInputModel = new WrapperInputModel<null>();
   }

  saveSessionData(data: UserProfileModel) {    
    localStorage.setItem('currentUser', JSON.stringify(data));
  }

  setStdInputData(data: UserProfileModel) {
    this.stdInputModel.companyGuid = data.companyGuid;
    this.stdInputModel.userGuid = data.userGuid;
  }

  removeSesssionData() {
    localStorage.removeItem('currentUser');
  }

  getSessionData(): UserProfileModel | null {
    let userDataStr: string | null = localStorage.getItem('currentUser');    
    if (userDataStr) {
      return JSON.parse(userDataStr) as UserProfileModel;
    } else {
      return null;
    }    
  }

  getAccessToken(): string | null {
    let userDataStr: string | null = localStorage.getItem('currentUser');
    let returnData: string;
    if (userDataStr) {
      let userData: UserProfileModel = JSON.parse(userDataStr) as UserProfileModel;
      return userData.accessToken;
    } else {
      return null;
    }    
  }
}
