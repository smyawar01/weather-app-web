// reducer.ts
import { AppState } from '../../types/types';
import { FETCH_FORECAST, FETCH_WEATHER, SET_LOADING, SET_ERROR } from '../actions/actions';

const initialState: AppState = {
    weather: null,
    forecast: [],
    loading: false,
    error: null,
};

const weatherReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case FETCH_WEATHER:
            return { ...state, weather: action.payload, loading: false, error: null };
        case FETCH_FORECAST:
            return { ...state, forecast: action.payload };
        case SET_LOADING:
            return { ...state, loading: action.payload };
        case SET_ERROR:
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }
};

export default weatherReducer;
