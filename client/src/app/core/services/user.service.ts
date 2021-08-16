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
  
  public addNewUser(data): Observable<Array<User>> {
    const route = 'users ';
    return this._commonHttpService.post(route, data);
  }
  
  public editUser(data): Observable<Array<User>> {
    const route = 'users/' + data.id;
    return this._commonHttpService.put(route, data);
  }
  
  public deleteUser(id): Observable<Array<User>> {
    const route = 'users/' + id;
    return this._commonHttpService.delete(route);
  }
}
