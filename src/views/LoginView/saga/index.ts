import {
  fork,
  takeLatest,
  call,
  put,
} from 'redux-saga/effects';
import {
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  REGISTER_USER, LOGIN_USER_ASYNC, TUser, TUsers, LOGOUT_USER,
} from '../types';
import { registerUserService, loginUserService } from '../../../services/authenticationService';
import { apiLogin, SendDataType } from '../../../api';
import { loginErrorAction, loginSuccessAction, loginUserAction } from '../action';
import { makeRequestLogin } from '../../../workers/makeRequestLogin';

export function* loginSaga(payload: any): Generator {
  const options = {
    fetcher: apiLogin.login.fetch,
    loginSuccessAction,
    params: payload.payload,
    loginUserAction,
    loginErrorAction,
  };
  yield makeRequestLogin<SendDataType, TUsers>(options);
}

function* watchUserAuthentication() {
  yield takeLatest(LOGIN_USER_ASYNC, loginSaga);
}

export default function* startForman():Generator {
  yield fork(watchUserAuthentication);
}