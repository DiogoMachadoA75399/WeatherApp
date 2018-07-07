import React, { Component } from 'react';
import DailyForecast from '../containers/DailyForecast';

class WeatherApp extends Component {

    render() {
        return (
            <div className="App">
                <DailyForecast />
            </div>
        );
    }

}

export default WeatherApp;