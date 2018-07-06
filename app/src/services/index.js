import axios from 'axios';
import { API_KEY } from '../constants/keys';

const url = "http://api.openweathermap.org/data/2.5/forecast";

export const getWeather = (city, country) =>
    axios.get(`${url}?q=${city},${country}&units=metric&appid=${API_KEY}`);
