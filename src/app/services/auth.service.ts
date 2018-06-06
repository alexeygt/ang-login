import { Injectable } from '@angular/core';

class UserAuthInfo {
  username: string;
  firstName: string;
  lastName: string;
  token: string;
}

@Injectable()
export class AuthService {

  constructor() { }

}
