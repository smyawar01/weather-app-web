// src/redux/store.ts
import { combineReducers } from 'redux';
import currentWeatherReducer from './weather/weatherReducer';
import forecastReducer from './forecast/forecastReducer';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  currentWeather: currentWeatherReducer,
  forecast: forecastReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

const store = configureStore({ reducer: rootReducer });

export default store;
