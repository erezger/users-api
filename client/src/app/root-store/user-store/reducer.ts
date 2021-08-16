import { Actions, ActionTypes } from './actions';
import { initialState, State } from './state';

export function userReducer(state = initialState, action: Actions): State {
   switch (action.type) {
      case ActionTypes.LOAD_USERS_REQUEST:
        return {
          ...state,
          error: null,
          users: null,
          isLoading: true,
        };
      case ActionTypes.LOAD_USERS_SUCCESS:
        return {
          ...state,
          error: null,
          users: action.payload.users,
          isLoading: true,
        };
      case ActionTypes.LOAD_USERS_FAILURE:
        return {
          ...state,
          users: [],
          error: action.payload.error,
          isLoading: false,
        };
      case ActionTypes.REGISTER_USER_REQUEST:
        return {
          ...state,
          error: null,
          isLoading: true,
        };
      case ActionTypes.REGISTER_USER_SUCCESS:
        return {
          ...state,
          error: null,
          isLoading: false,
        };
      case ActionTypes.REGISTER_USER_FAILURE:
        return {
          ...state,
          error: action.payload.error,
          isLoading: false
        };
      default: {
         return state;
      }
    }
 }