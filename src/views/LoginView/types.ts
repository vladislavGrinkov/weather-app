export type TUsers = {
  username: string;
  password: string;
}

export type TUser = {
  user: TUsers;
}

export const REGISTER_USER = 'REGISTER_USER';
type RegisterUserAction = {
  type: typeof REGISTER_USER;
  user: any,
}

export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
type RegisterUserSuccessAction = {
  type: typeof REGISTER_USER_SUCCESS;
}

export const REGISTER_USER_ERROR = 'REGISTER_USER_ERROR';
type RegisterUserErrorAction = {
  type: typeof REGISTER_USER_ERROR;
}

export const LOGIN_USER = 'LOGIN_USER';
export type LoginUserAction = {
  type: typeof LOGIN_USER;
  payload: TUsers,
}

export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export type LoginUserSuccessAction = {
  type: typeof LOGIN_USER_SUCCESS;
}

export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR';
export type LoginUserErrorAction = {
  type: typeof LOGIN_USER_ERROR;
}

export const LOGOUT_USER = 'LOGOUT_USER';
export type LogoutUserAction = {
  type: typeof LOGOUT_USER;
}

export const LOGIN_RESET = 'LOGIN_RESET';
export type LoginResetUserAction = {
  type: typeof LOGIN_RESET;
}

// async
export const LOGIN_USER_ASYNC = 'LOGIN_USER_ASYNC';
export type LoginUserAsync = {
  type: typeof LOGIN_USER_ASYNC;
  payload: TUsers,
}

export type RegisterActionTypes =
  | RegisterUserAction
  | RegisterUserSuccessAction
  | RegisterUserErrorAction;

export type LoginActionTypes =
  | LoginUserAction
  | LoginUserSuccessAction
  | LoginUserErrorAction
  | LoginUserAsync
  | LogoutUserAction
  | LoginResetUserAction;