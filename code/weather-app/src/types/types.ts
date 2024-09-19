export interface WeatherData {
    temp: number;
    humidity: number;
    conditions: string;
}

export interface AppState {
    weather: WeatherData | null;
    loading: boolean;
    error: string | null;
}
