import React, { Component } from 'react';
import DailyForecast from '../containers/DailyForecast';
import SearchBar from '../containers/SearchBar';

class WeatherApp extends Component {

    render() {
        return (
            <div id="outerWrapper">
                <SearchBar />
                <DailyForecast />
            </div>
        );
    }

}

export default WeatherApp;