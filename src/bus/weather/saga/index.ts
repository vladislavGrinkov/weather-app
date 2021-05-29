// Core
import { SagaIterator } from '@redux-saga/core';
import { takeEvery, all, call } from 'redux-saga/effects';

import { WEATHER_FETCH_ASYNC } from '../types';

export function* watchWeather(): SagaIterator {
  yield all([]);
}
