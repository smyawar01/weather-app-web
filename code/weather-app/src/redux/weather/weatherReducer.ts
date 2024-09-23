// src/redux/currentWeatherReducer.js
import {
    FETCH_CURRENT_WEATHER_REQUEST,
    FETCH_CURRENT_WEATHER_SUCCESS,
    FETCH_CURRENT_WEATHER_FAILURE,
  } from './action';
  
  const initialState = {
    loading: false,
    data: null,
    error: '',
  };
  
  const currentWeatherReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case FETCH_CURRENT_WEATHER_REQUEST:
        return { ...state, loading: true, error: '' };
      case FETCH_CURRENT_WEATHER_SUCCESS:
        return { loading: false, data: action.payload, error: '' };
      case FETCH_CURRENT_WEATHER_FAILURE:
        return { loading: false, data: null, error: action.payload };
      default:
        return state;
    }
  };
  
  export default currentWeatherReducer;
  