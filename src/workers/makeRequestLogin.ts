import { ActionCreator, AnyAction } from 'redux';
import { put, call } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import jwt from 'jsonwebtoken';
import Cookie from 'js-cookie';
import { FillActionType } from '../types';
import { TUser, TUsers } from '../views/LoginView/types';

export type OptionsType<T, U> = {
  fetcher: (data: U) => Promise<T>;
  fetcherParam?: string;
  loginSuccessAction: ActionCreator<AnyAction>;
  loginErrorAction: ActionCreator<AnyAction>;
  loginUserAction: FillActionType<U>
  params: U,
};

export function* makeRequestLogin<T, U>(options: OptionsType<T, U>): SagaIterator {
  const {
    loginSuccessAction,
    loginUserAction,
    loginErrorAction,
    params,
    fetcher,
  } = options;
  try {
    const KEY = 'sdadsa1231dasdsadasdsadsa';
    const token = jwt.sign({
      ...params,
      isAuth: true,
    }, KEY);
    const result = yield call(fetcher, params);
    console.log('result: ', result);
    yield put(loginUserAction(result));
    if (result.isAuth) {
      yield put(loginSuccessAction());
      Cookie.set('token', token, { expires: 1 });
    }
  } catch (e) {
    console.log(e.message);
    yield put(loginErrorAction());
  }
}