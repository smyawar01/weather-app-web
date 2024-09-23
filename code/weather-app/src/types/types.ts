export interface WeatherData {
    temp: number;
    humidity: number;
    conditions: string;
    date?: string; // Optional for forecast items
}