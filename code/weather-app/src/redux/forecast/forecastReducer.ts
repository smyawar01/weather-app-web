// src/redux/forecastReducer.js
import {
    FETCH_FORECAST_REQUEST,
    FETCH_FORECAST_SUCCESS,
    FETCH_FORECAST_FAILURE,
  } from './action';
  
  const initialState = {
    loading: false,
    data: [],
    error: '',
  };
  
  const forecastReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case FETCH_FORECAST_REQUEST:
        return { ...state, loading: true, error: '' };
      case FETCH_FORECAST_SUCCESS:
        return { loading: false, data: action.payload.list, error: '' };
      case FETCH_FORECAST_FAILURE:
        return { loading: false, data: [], error: action.payload };
      default:
        return state;
    }
  };
  
  export default forecastReducer;
  