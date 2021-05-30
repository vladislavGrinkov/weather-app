import { SagaIterator } from '@redux-saga/core';
import { put, call } from 'redux-saga/effects';
import { ActionCreator, AnyAction } from 'redux';
import { WeatherFillAction, Weathers } from '../bus/weather/types';
import { FillActionType } from '../types';
import { root } from '../api/confing';

export type OptionsType<T> = {
  fetcher: (url?: string) => Promise<T>;
  fetcherParam?: string;
  startFetching: ActionCreator<AnyAction>;
  stopFetching: ActionCreator<AnyAction>;
  fill: FillActionType<T>;
};

export function* makeRequestWithSpinner<T>(options: OptionsType<T>): SagaIterator {
  const {
    fetcher, fetcherParam, startFetching, stopFetching, fill,
  } = options;
  try {
    yield put(startFetching());
    const result = yield call(fetcher, fetcherParam);
    yield put(fill(result));
  } catch (e) {
    console.log(e.message);
  } finally {
    yield put(stopFetching());
  }
}
