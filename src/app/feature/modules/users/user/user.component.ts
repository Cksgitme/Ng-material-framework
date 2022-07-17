import { AfterViewInit, Component, Injector, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { merge, Observable, of } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { FeatureBaseComponent } from 'src/app/feature/components/feature-base/feature-base.component';
import { UserModel } from 'src/app/feature/models/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent extends FeatureBaseComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'email', 'mobile', 'companyName', 'action'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  usersList: Observable<UserModel[]> = new Observable<UserModel[]>();
  constructor(injector: Injector,
    private _userService: UserService) { 
    super(injector);
  }

  ngAfterViewInit() {
    // this.usersList = merge(this.sort.sortChange, this.paginator.page)
    //   .pipe(
    //     startWith({}),
    //     switchMap(() => {
    //       // this.viewFormInputModel.sortBy = this.sort.active;
    //       this.viewFormInputModel.sortBy = '1';
    //       this.viewFormInputModel.sortOrder = this.sort.direction;
    //       this.viewFormInputModel.pageIndex = this.paginator.pageIndex;
    //       this.viewFormInputModel.documentGuid = 'C861B1B2-9379-418A-B85B-ADB9BB9C72D6';
    //       this.reqModel.data = this.viewFormInputModel;          
    //       return this._userService.getDataForEmployeeGrid(this.reqModel);
    //     }),
    //     map(data => {                    
    //       this.totalCount = data.totalCount;
    //       return data.dataList;
    //     }),
    //     catchError(() => {                  
    //       return of([]);
    //     })
    //   );
  }

  getUsersList() {

  }

  resetPaging(): void {
    this.paginator.pageIndex = 0;
  }

}
