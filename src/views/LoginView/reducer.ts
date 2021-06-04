import {
  LOGIN_USER,
  LOGIN_USER_ERROR,
  LOGIN_USER_SUCCESS,
  LoginActionTypes,
  TUsers,
  LOGIN_USER_ASYNC,
  LOGOUT_USER,
  LOGIN_RESET,
} from './types';

export type TState = {
  user: TUsers,
  isAuth: boolean,
  isError: boolean,
}

const initialState: TState = {
  user: {
    username: '',
    password: '',
  },
  isAuth: false,
  isError: false,
};

export const LoginReducer = (state = initialState, action: LoginActionTypes): TState => {
  switch (action.type) {
    case LOGIN_RESET:
      return {
        ...state,
        isAuth: false,
        isError: false,
      };
    case LOGOUT_USER:
      return {
        ...state,
        isAuth: false,
      };
    case LOGIN_USER_ASYNC:
      return state;
    case LOGIN_USER:
      return {
        ...state,
        ...action.payload,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isAuth: true,
        isError: false,
      };
    case LOGIN_USER_ERROR:
      return {
        ...state,
        isAuth: false,
        isError: true,
      };
    default:
      // eslint-disable-next-line no-case-declarations
      const x: never = action;
      return state;
  }
};