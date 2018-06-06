import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { FormBuilder } from '@angular/forms';

import { UserLogin } from '../models/user-login';
import { LoginComponent } from './login.component';

const emptyUser = { username: '', password: '' };
const validUser = { username: 'email@google.com', password: '12345678' };
const invalidUser = { username: 'email-google-com', password: '12345' };

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  let submit: DebugElement;
  let username: DebugElement;
  let password: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [FormBuilder],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    submit = fixture.debugElement.query(By.css('button[type=submit]'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  function updateForm(login: UserLogin) {
    component.loginForm.controls['username'].setValue(login.username);
    component.loginForm.controls['password'].setValue(login.password);
  }

  it('should have default props', async(() => {
    expect(component.loginForm.value).toEqual(emptyUser);
  }));

  it('loginForm value should update from controls', async(() => {
    updateForm(validUser);
    expect(component.loginForm.value).toEqual(validUser);
  }));

  it('loginForm should be valid when controls are valid', async(() => {
    updateForm(validUser);
    expect(component.loginForm.valid).toBeTruthy();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(submit.nativeElement.disabled).toBeFalsy();
    });
  }));

  it('loginForm should be invalid when controls are invalid', async(() => {
    updateForm(invalidUser);
    expect(component.loginForm.valid).toBeFalsy();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(submit.nativeElement.disabled).toBeTruthy();
    });
  }));

  it('should update model on submit', async(() => {
    updateForm(validUser);
    component.onSubmit();
    expect(component.model).toEqual(validUser);
    expect(component.loginForm.value).toEqual(emptyUser);
  }));

});
