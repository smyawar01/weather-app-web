import { WeatherData } from "../../types/types";

// actions.ts
export const FETCH_WEATHER = "FETCH_WEATHER";
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";

export const fetchWeather = (data: WeatherData) => ({
    type: FETCH_WEATHER,
    payload: data,
});

export const setLoading = (loading: boolean) => ({
    type: SET_LOADING,
    payload: loading,
});

export const setError = (error: string) => ({
    type: SET_ERROR,
    payload: error,
});
