export type Weather = {
  name: string;
};

export type Weathers = {
  results: Weather[];
};

export const WEATHER_START_FETCHING = 'WEATHER_START_FETCHING';
type WeatherStartFetchingAction = {
  type: typeof WEATHER_START_FETCHING;
};

export const WEATHER_STOP_FETCHING = 'WEATHER_STOP_FETCHING';
type WeatherStopFetchingAction = {
  type: typeof WEATHER_STOP_FETCHING;
};

export const WEATHER_FILL = 'WEATHER_FILL'; // запись
export type WeatherFillAction = {
  type: typeof WEATHER_FILL;
  payload: Weathers;
};

// Async action ?????
export const WEATHER_FETCH_ASYNC = 'WEATHER_FETCH_ASYNC'; // сага будет наблюдать за этим action
type WeatherFetchAsyncAction = {
  type: typeof WEATHER_FETCH_ASYNC;
};

export type WeatherActionTypes =
  | WeatherFillAction
  | WeatherStopFetchingAction
  | WeatherStartFetchingAction
  | WeatherFetchAsyncAction;
