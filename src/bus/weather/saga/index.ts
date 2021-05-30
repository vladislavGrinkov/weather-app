// Core
import {
  takeEvery, all, call, put,
} from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import { ActionCreator, AnyAction } from 'redux';
import { startFetching, stopFetching, fill } from '../action';
import { WEATHER_FETCH_ASYNC, WeatherFillAction, Weathers } from '../types';
import { api } from '../../../api';

import { makeRequestWithSpinner } from '../../../workers';

function* fetchWeathers(): Generator {
  const options = {
    fetcher: api.weather.fetch,
    startFetching,
    stopFetching,
    fill,
  };

  // Универсальная сага async
  yield makeRequestWithSpinner<Weathers>(options);
}

function* watchFetchWeathers(): SagaIterator {
  yield takeEvery(WEATHER_FETCH_ASYNC, fetchWeathers);
}

export function* watchWeather(): SagaIterator {
  yield all([call(watchFetchWeathers)]);
}
