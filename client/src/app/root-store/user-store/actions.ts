import { User } from '@app/core/models/user.model';
import { Action, createAction, props } from '@ngrx/store';

export enum ActionTypes {
    LOAD_USERS_REQUEST = '[User] LOAD Users Request',
    LOAD_USERS_SUCCESS = '[User] Get Users Success',
    LOAD_USERS_FAILURE = '[User] Get Uers Failure',
    REGISTER_USER_REQUEST = '[User] Register User Request',
    REGISTER_USER_SUCCESS = '[User] Register User Success',
    REGISTER_USER_FAILURE = '[User] Register User Failure',
  }
  
  export class loadUsersRequestAction implements Action {
    readonly type = ActionTypes.LOAD_USERS_REQUEST;
  }
  
  export class loadUsersSuccessAction implements Action {
    readonly type = ActionTypes.LOAD_USERS_SUCCESS;
    constructor(public payload:{users: User[]}) {}
  }
  
  export class loadUsersFailureAction implements Action {
    readonly type = ActionTypes.LOAD_USERS_FAILURE;
    constructor(public payload: {error: any}) {}
  }
  
  export class registerUserRequestAction implements Action {
    readonly type = ActionTypes.REGISTER_USER_REQUEST;
    constructor(public payload: { success: boolean }) {}
  }
  
  export class registerUserSuccessAction implements Action {
    readonly type = ActionTypes.REGISTER_USER_SUCCESS;
    // constructor(public payload: { success: boolean }) {}
  }
  
  export class registerUserFailureAction implements Action {
    readonly type = ActionTypes.REGISTER_USER_FAILURE;
    constructor(public payload: { error: any }) {}
  }
    
  export type Actions = 
  loadUsersRequestAction |
  loadUsersSuccessAction |
  loadUsersFailureAction |
  registerUserRequestAction |
  registerUserSuccessAction |
  registerUserFailureAction;