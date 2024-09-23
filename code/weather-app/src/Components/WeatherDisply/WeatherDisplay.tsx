import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentWeather } from '../../redux/weather/action';
import { CenteredDiv, ContainerDiv, Content } from '../../styles';
import { AppState } from '../../redux/store';

interface Props {
    city: string;
}
const WeatherDisplay: React.FC<Props> = ({ city }) => {

    const dispatch = useDispatch();
    const { loading, data, error } = useSelector((state: AppState) => state.currentWeather);
  
    useEffect(() => {
      dispatch(fetchCurrentWeather(city));
    }, [dispatch, city]);
    
    const showContent = () => {

        if (loading) return <p>Loading current weather...</p>;
        if (error) return <p>Error: {error}</p>;
        return <Content>
                    <h2>Weather Information</h2>
                    <p>Temperature: {data.main.temp}°C</p>
                    <p>Humidity: {data.main.humidity}%</p>
                    <p>Conditions: {data.main.conditions}</p>
                </Content>
    }
    return (
        <ContainerDiv>
            <CenteredDiv>
                {showContent()}
            </CenteredDiv>
        </ContainerDiv>
    );
};

export default WeatherDisplay;