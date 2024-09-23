// src/redux/actions.js
import axios from 'axios';
import { ForecastActionTypes } from './types';
import { AppState } from '../store';
import { ThunkAction } from '@reduxjs/toolkit';

export const FETCH_FORECAST_REQUEST = "FETCH_FORECAST_REQUEST";
export const FETCH_FORECAST_SUCCESS = "FETCH_FORECAST_SUCCESS";
export const FETCH_FORECAST_FAILURE = "FETCH_FORECAST_FAILURE";

const API_KEY = 'your-api-key'; // Replace with your OpenWeatherMap API key

export const fetchForecast = (city: string): ThunkAction<void, AppState, unknown, ForecastActionTypes> => {
  return async (dispatch) => {
    dispatch({ type: FETCH_FORECAST_REQUEST });
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`);
      dispatch({ type: FETCH_FORECAST_SUCCESS, payload: response.data });
    } catch (error) {
        const errorMessage = (error as Error).message || 'Unknown error. Please try later'
        dispatch({ type: FETCH_FORECAST_FAILURE, payload: errorMessage });
    }
  };
};
