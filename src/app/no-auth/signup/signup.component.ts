import { SnackbarService } from "src/app/core/services/snackbar.service";
import { SessionService } from "src/app/core/services/session.service";
import { NoAuthService } from "./../services/no-auth.service";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
  hide: boolean = false;
  RegistrationForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private noAuthService: NoAuthService,
    private sessionService: SessionService,
    private snackbarService: SnackbarService
  ) {
    this.RegistrationForm = this.formBuilder.group({
      userCode: ["", [Validators.required, Validators.maxLength(10)]],
      username: ["", [Validators.required, Validators.maxLength(20)]],
      firstname: ["", [Validators.required, Validators.maxLength(20)]],
      lastname: ["", [Validators.required, Validators.maxLength(20)]],
      password: ["", [Validators.required, Validators.maxLength(20)]],
      passwordConfirm: ["", [Validators.required, Validators.maxLength(20)]],
    });
    console.log("RegistrationForm", this.RegistrationForm);
  }

  ngOnInit(): void {}

  onSubmit() {}
}
