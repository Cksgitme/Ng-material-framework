import { SnackbarService } from "src/app/core/services/snackbar.service";
import { SessionService } from "src/app/core/services/session.service";
import { NoAuthService } from "./../services/no-auth.service";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.component.html",
  styleUrls: ["./forgot-password.component.scss"],
})
export class ForgotPasswordComponent implements OnInit {
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
      passwordConfirm: ["", [Validators.required, Validators.maxLength(20)]],
    });
    console.log("loginForm", this.loginForm);
  }

  ngOnInit(): void {}

  onSubmit() {}
}
