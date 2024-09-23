// src/redux/types.ts
import { Action } from 'redux';

export interface FetchCurrentWeatherRequestAction extends Action {
  type: 'FETCH_CURRENT_WEATHER_REQUEST';
}

export interface FetchCurrentWeatherSuccessAction extends Action {
  type: 'FETCH_CURRENT_WEATHER_SUCCESS';
  payload: any; // Replace `any` with your actual data type
}

export interface FetchCurrentWeatherFailureAction extends Action {
  type: 'FETCH_CURRENT_WEATHER_FAILURE';
  payload: string;
}

// Combine all action types
export type WeatherActionTypes =
  | FetchCurrentWeatherRequestAction
  | FetchCurrentWeatherSuccessAction
  | FetchCurrentWeatherFailureAction;
