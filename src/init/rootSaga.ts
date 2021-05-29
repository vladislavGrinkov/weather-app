import { all } from 'redux-saga/effects';

import { watchWeather } from '../bus/weather/saga';

export function* rootSaga(): Generator {
  yield all([watchWeather()]);
}
