// Core
import { combineReducers } from 'redux';

// Reducers
import { weatherReducer as weather } from '../bus/weather/reducer';
import { LoginReducer } from '../views/LoginView/reducer';

export const rootReducer = combineReducers({
  weather,
  LoginReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
