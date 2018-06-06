import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { map } from 'rxjs/operators';
import 'rxjs/add/observable/of';

class UserAuthInfo {
  username: string;
  firstName: string;
  lastName: string;
  token: string;
}

@Injectable()
export class AuthService {

  private readonly userInfoSubject = new BehaviorSubject<UserAuthInfo | undefined>(undefined);

  public get userAuthInfo(): Observable<UserAuthInfo | undefined> {
    return this.userInfoSubject.asObservable();
  }

  get isLoggedIn(): Observable<boolean> {
    return this.userInfoSubject.asObservable().pipe(map(x => !!x));
  }

  get userName(): Observable<string | undefined> {
    return this.userInfoSubject.asObservable().pipe(map(x => !!x ? x.username : undefined));
  }

  constructor() { }

  login(username: string, password: string): Observable<boolean> {
    return Observable.of(username === 'Admin');
  }
}
