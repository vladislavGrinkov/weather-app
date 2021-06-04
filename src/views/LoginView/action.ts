import {
  LOGIN_RESET,
  LOGIN_USER,
  LOGIN_USER_ASYNC,
  LOGIN_USER_ERROR,
  LOGIN_USER_SUCCESS,
  LoginActionTypes,
  LoginUserAction,
  LOGOUT_USER,
  REGISTER_USER,
  RegisterActionTypes,
  TUsers,
} from './types';

export function registerUserAction(user: TUsers): RegisterActionTypes {
  return {
    type: REGISTER_USER,
    user,
  };
}

export function loginUserAction(payload: TUsers): LoginUserAction {
  return {
    type: LOGIN_USER,
    payload,
  };
}

export function loginSuccessAction(): LoginActionTypes {
  return {
    type: LOGIN_USER_SUCCESS,
  };
}

export function loginErrorAction(): LoginActionTypes {
  return {
    type: LOGIN_USER_ERROR,
  };
}

export function logoutAction(): LoginActionTypes {
  return {
    type: LOGOUT_USER,
  };
}

export function loginReset(): LoginActionTypes {
  return {
    type: LOGIN_RESET,
  };
}

export function fetchAsync(payload: TUsers): LoginActionTypes {
  return {
    type: LOGIN_USER_ASYNC,
    payload,
  };
}