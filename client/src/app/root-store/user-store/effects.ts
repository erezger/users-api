import { Injectable } from '@angular/core';
import { UserService } from '@app/core/services/user.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import * as userActions from './actions';

@Injectable()
export class UserStoreEffects {
  constructor(
    private userService: UserService,
    private actions$: Actions,
    ) {}

  @Effect()
  loadUsersRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<userActions.loadUsersRequestAction>(
      userActions.ActionTypes.LOAD_USERS_REQUEST
    ),
    switchMap(action =>
      this.userService
      .getUsersList()
	.pipe(
	  map(
	    users =>
	      new userActions.loadUsersSuccessAction({users})
	  ),
	  catchError(error =>
	    observableOf(new userActions.loadUsersFailureAction({ error }))
	  )
	)
    )
  );
}
