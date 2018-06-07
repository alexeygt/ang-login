import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserLogin } from '../models/user-login';
import { Router } from '@angular/router';

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

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    this.model = this.loginForm.value;

    console.log(this.model);

    // this.loginForm.reset({ username: '', password: '' });
    this.router.navigate(['/home']);
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
