export interface WeatherData {
    temp: number;
    humidity: number;
    conditions: string;
    date?: string; // Optional for forecast items
}

export interface AppState {
    weather: WeatherData | null;
    forecast: WeatherData[]; // Update to hold an array of forecast data
    loading: boolean;
    error: string | null;
}
