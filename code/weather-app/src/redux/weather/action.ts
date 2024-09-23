// src/redux/actions.js
import axios from 'axios';
import { WeatherActionTypes } from './types';
import { ThunkAction } from '@reduxjs/toolkit';
import { AppState } from '../store';
export const FETCH_CURRENT_WEATHER_REQUEST = "FETCH_CURRENT_WEATHER_REQUEST";
export const FETCH_CURRENT_WEATHER_SUCCESS = "FETCH_CURRENT_WEATHER_SUCCESS";
export const FETCH_CURRENT_WEATHER_FAILURE = "FETCH_CURRENT_WEATHER_FAILURE";

const API_KEY = 'your-api-key'; // Replace with your OpenWeatherMap API key

export const fetchCurrentWeather = (city: string): ThunkAction<void, AppState, unknown, WeatherActionTypes> => {
  return async (dispatch) => {
    dispatch({ type: FETCH_CURRENT_WEATHER_REQUEST });
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      dispatch({ type: FETCH_CURRENT_WEATHER_SUCCESS, payload: response.data });
    } catch (error) {
      const errorMessage = (error as Error).message || 'Unknown error. Please try later'
      dispatch({ type: FETCH_CURRENT_WEATHER_FAILURE, payload: errorMessage });
    }
  };
};