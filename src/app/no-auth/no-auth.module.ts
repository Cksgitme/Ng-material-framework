import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NoAuthRoutingModule } from './no-auth-routing.module';
import { MatSnackBar } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NoAuthRoutingModule
  ],
  providers: [MatSnackBar]
})
export class NoAuthModule { }
