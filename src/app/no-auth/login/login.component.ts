import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { WrapperInputModel } from "src/app/core/models/wrapper-input-model";
import { SessionService } from "src/app/core/services/session.service";
import { SnackbarService } from "src/app/core/services/snackbar.service";
import { UserProfileModel } from "src/app/shared/models/user-profile.model";
import { LoginModel } from "../models/login.model";
import { NoAuthService } from "../services/no-auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  hide: boolean = false;
  loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private noAuthService: NoAuthService,
    private sessionService: SessionService,
    private snackbarService: SnackbarService
  ) {
    this.loginForm = this.formBuilder.group({
      userCode: ["", [Validators.required, Validators.maxLength(10)]],
      userPassword: ["", [Validators.required, Validators.maxLength(20)]],
    });
    console.log("loginForm", this.loginForm);
  }

  ngOnInit(): void {}

  onSubmit() {
    let formData: LoginModel = this.loginForm.getRawValue();
    let reqData: WrapperInputModel<LoginModel> =
      new WrapperInputModel<LoginModel>();
    reqData.data = formData;
    let res: UserProfileModel = this.getUserData();
    // this.noAuthService.login(reqData).subscribe((res: UserProfileModel) => {
    //   if (res) {
    console.log("login res", res);
    this.sessionService.saveSessionData(res);
    this.sessionService.setStdInputData(res);
    this.snackbarService.showMessage("Sucessfully Logged In!", "X");
    this.router.navigate(["my-app"]);
    //   }
    // })
  }

  getErrorMessage() {
    return "This field is mandatory";
  }

  getUserData(): UserProfileModel {
    return {
      userGuid: "A5221D4D-F691-4791-B4E2-479DDB4EDE75",
      username: "Alex  ",
      email: "",
      mobile: "",
      companyGuid: null,
      accessToken:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyTmFtZSI6IlN1cGVyIEFkbWluICAiLCJVc2VyR3VpZCI6IkE1MjIxRDRELUY2OTEtNDc5MS1CNEUyLTQ3OUREQjRFREU3NSIsImV4cCI6MTYyMDI5MDkyMiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1MDAxLyIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NTAwMS8ifQ.9gY5AKtteV7-k2MhNlut6qWnLfocLKLJul_h-tIWYTQ",
      companyName: "",
    };
  }
}
