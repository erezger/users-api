import { createSelector, MemoizedSelector } from '@ngrx/store';
import {
  UserStoreSelectors
} from './user-store';

export const selectError: MemoizedSelector<object, string> = createSelector(
  UserStoreSelectors.selectUserError,
  (userError: any) => {
    return userError;
  }
);

export const selectIsLoading: MemoizedSelector<
  object,
  boolean
> = createSelector(
  UserStoreSelectors.selectUserIsLoading,
  (user: boolean) => {
    return user;
  }
);