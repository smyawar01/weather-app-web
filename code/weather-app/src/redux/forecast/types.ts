import { Action } from 'redux';

export interface FetchForecastRequestAction extends Action {
    type: 'FETCH_FORECAST_REQUEST';
  }
  
  export interface FetchForecastSuccessAction extends Action {
    type: 'FETCH_FORECAST_SUCCESS';
    payload: any; // Replace `any` with your actual data type
  }
  
  export interface FetchForecastFailureAction extends Action {
    type: 'FETCH_FORECAST_FAILURE';
    payload: string;
  }

  export type ForecastActionTypes =
  | FetchForecastRequestAction
  | FetchForecastSuccessAction
  | FetchForecastFailureAction;