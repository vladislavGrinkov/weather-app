import {
  WEATHER_FETCH_ASYNC,
  WEATHER_FILL,
  WEATHER_START_FETCHING,
  WEATHER_STOP_FETCHING,
  WeatherActionTypes,
  WeatherFillAction,
  Weathers,
} from './types';

export function startFetching(): WeatherActionTypes {
  return {
    type: WEATHER_START_FETCHING,
  };
}

export function stopFetching(): WeatherActionTypes {
  return {
    type: WEATHER_STOP_FETCHING,
  };
}

export function fill(payload: Weathers): WeatherFillAction {
  return {
    type: WEATHER_FILL,
    payload,
  };
}

// async
export function fetchAsync(): WeatherActionTypes {
  return {
    type: WEATHER_FETCH_ASYNC,
  };
}
