import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserLogin } from '../models/user-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public model: UserLogin;
  public loginForm: FormGroup;

  static getControlErrorMessage(controlName: string, propertyName: string, validator?: any) {
    const config = {
      'required': `${controlName} cannot be empty`,
      'email': 'Invalid email address',
      'minlength': `Minimum length ${validator.requiredLength} characters`,
    };
    return config[propertyName];
  }

  constructor(formBuilder: FormBuilder) {
    this.loginForm = formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    this.model = this.loginForm.value;

    alert(JSON.stringify(this.model));

    this.loginForm.reset();
  }

  errorMessage(controlName: string) {
    const control = this.loginForm.controls[controlName];
    for (const propertyName in control.errors) {
      if (control.errors.hasOwnProperty(propertyName) && control.touched) {
        return LoginComponent.getControlErrorMessage(controlName, propertyName, control.errors[propertyName]);
      }
    }
  }
}
