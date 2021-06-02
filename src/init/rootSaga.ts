import { all } from 'redux-saga/effects';

import { watchWeather } from '../bus/weather/saga';
import startForman from '../views/LoginView/saga';

export function* rootSaga(): Generator {
  yield all([watchWeather(), startForman()]);
}
