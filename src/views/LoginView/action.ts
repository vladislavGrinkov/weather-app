import {
  LOGIN_USER,
  LOGIN_USER_ASYNC,
  LOGIN_USER_ERROR,
  LOGIN_USER_SUCCESS,
  LoginActionTypes,
  LoginUserAction,
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

export function fetchAsync(payload: TUsers): LoginActionTypes {
  return {
    type: LOGIN_USER_ASYNC,
    payload,
  };
}