import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {CommonHttpService} from './common-http.service';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private _commonHttpService: CommonHttpService) {
  }

  public getUsersList(): Observable<Array<User>> {
    const route = 'users/all ';
    return this._commonHttpService.get(route);
  }
}
