import { Component, Injector, OnInit } from '@angular/core';
import { WrapperInputModel } from 'src/app/core/models/wrapper-input-model';
import { SessionService } from 'src/app/core/services/session.service';
import { UserProfileModel } from 'src/app/shared/models/user-profile.model';
import { CommonSortFilterModel } from '../../models/common-sort-filter.model';

@Component({
  selector: 'app-feature-base',
  templateUrl: './feature-base.component.html',
  styleUrls: ['./feature-base.component.scss']
})
export class FeatureBaseComponent implements OnInit {
  protected sessionService: any;
  totalCount: number = 0;
  reqModel: WrapperInputModel<any> = new WrapperInputModel<null>();
  viewFormInputModel: CommonSortFilterModel = new CommonSortFilterModel()
  constructor(injector: Injector) { ;
    this.sessionService = injector.get(SessionService);
    let logedInUserData: UserProfileModel = this.sessionService.getSessionData();
    this.reqModel.userGuid = logedInUserData.userGuid;
    this.reqModel.companyGuid = logedInUserData.companyGuid;
  }

  ngOnInit(): void {
  }
  
}
