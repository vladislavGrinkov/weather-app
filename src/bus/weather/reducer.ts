import {
  WEATHER_FETCH_ASYNC,
  WEATHER_FILL,
  WEATHER_START_FETCHING,
  WEATHER_STOP_FETCHING,
  WeatherActionTypes,
  Weathers,
} from './types';

export type WeathersState = {
  data: Weathers;
  isFetching: boolean;
  error: false | string;
};

const initialState: WeathersState = {
  data: {
    results: [],
  },
  isFetching: false,
  error: false,
};

export const weatherReducer = (state = initialState, action: WeatherActionTypes): WeathersState => {
  switch (action.type) {
    case WEATHER_START_FETCHING:
      return {
        ...state,
        error: false,
        isFetching: true,
      };
    case WEATHER_STOP_FETCHING:
      return {
        ...state,
        error: false,
        isFetching: false,
      };
    case WEATHER_FILL:
      return {
        ...state,
        error: false,
        isFetching: false,
        data: {
          ...action.payload,
        },
      };
    case WEATHER_FETCH_ASYNC:
      return state;
    default:
      // eslint-disable-next-line no-case-declarations
      const x: never = action;
      return state;
  }
};
