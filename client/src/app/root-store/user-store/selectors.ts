import { User } from '@app/core/models/user.model';
import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from '@ngrx/store';
import { State } from './state';

const getError = (state: State): any => state.error;

const getIsLoading = (state: State): boolean => state.isLoading;

const getUsers = (state: State): any => state.users;

export const selectUserState: MemoizedSelector<
  object,
  State
> = createFeatureSelector<State>('user');

export const selectUserError: MemoizedSelector<object, any> = createSelector(
  selectUserState,
  getError
);

export const selectUserIsLoading: MemoizedSelector<
  object,
  boolean
> = createSelector(selectUserState, getIsLoading);

export const selectUserUsers: MemoizedSelector<
  object,
  User[]
> = createSelector(selectUserState, getUsers);