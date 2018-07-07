import axios from 'axios';

const API_KEY = 'gZ0gmKOMG39ijsg2Jd7Zb0203svc5OTk';

const BASE_URL = 'http://dataservice.accuweather.com/';
const FORECASTS_URL = BASE_URL + 'forecasts/v1/';


export const getDailyForecasts = (days, locationKey, language = 'en-US', metric = true) => {
    const url = `${FORECASTS_URL}/daily/${days}day/${locationKey}`;
    return axios
        .get(url, {
            params: { apikey: API_KEY, metric, language },
        })
        .then(response => {
            let dailyForecasts = response.data.DailyForecasts;
            return dailyForecasts.map(dailyForecast => ({
                Date: dailyForecast.Date,
                DescriptionDay: dailyForecast.Day.IconPhrase,
                DescriptionNight: dailyForecast.Night.IconPhrase,
                MaximumTemperature: dailyForecast.Temperature.Maximum.Value,
                MinimumTemperature: dailyForecast.Temperature.Minimum.Value,
            }))
        });
}