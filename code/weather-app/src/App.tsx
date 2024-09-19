import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import SearchBar from './Components/SearchBar/SearchBar';
import WeatherDisplay from './Components/WeatherDisply/WeatherDisplay';
import ForecastList from './Components/ForecastList/ForecastList';

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <div>
                <h1>Weather Information App</h1>
                <SearchBar />
                <WeatherDisplay />
                <ForecastList />
            </div>
        </Provider>
    );
};

export default App;
