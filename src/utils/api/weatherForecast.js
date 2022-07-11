
import axiosClient from './axiosClient';
const weatherForecastAPI = {
    get: () => {
        const url = '/WeatherForecast';
        
        return axiosClient.get(url);
    }
}