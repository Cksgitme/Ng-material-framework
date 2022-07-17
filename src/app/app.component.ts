import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from './core/services/session.service';
import { UserProfileModel } from './shared/models/user-profile.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-framework';

  constructor(private sessionService: SessionService,
    private router: Router) {
    this.getAppStatus();
  }

  getAppStatus() {
    let loggedInUserData: UserProfileModel | null = this.sessionService.getSessionData();
    if (loggedInUserData && loggedInUserData.accessToken) {
      this.router.navigate(['my-app']);
    } else {
      this.router.navigate(['']);
    }
    
  }
}
