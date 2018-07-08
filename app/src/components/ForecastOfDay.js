import React, { Component } from 'react';
import moment from 'moment';

import './style.css';

class ForecastOfDay extends Component {

    getBackground = () => {
        let maximumTemperature = this.props.forecast.MaximumTemperature;
        if (maximumTemperature > 30) {
            return 'rgb(255, 87, 0)';
        }
        if (maximumTemperature > 28) {
            return 'rgb(255, 96, 0)';
        }
        if (maximumTemperature > 25) {
            return 'rgb(255, 138, 0)';
        }
        if (maximumTemperature > 20) {
            return 'rgb(0, 165, 255)';
        }
        if (maximumTemperature > 10) {
            return 'rgb(0, 127, 255)';
        }
        if (maximumTemperature > 5) {
            return 'rgb(0, 114, 255)';
        }
        if (maximumTemperature > 0) {
            return 'rgb(0, 71, 214)';
        }
        if (maximumTemperature < 0) {
            return 'rgb(1, 47, 173)';
        }
    }

    render() {
        let momentDate = moment(this.props.forecast.Date);
        let dayOfWeek = momentDate.format('ddd');
        let dayOfMonth = momentDate.format('DD');
        let month = momentDate.format('MMMM');

        let max = this.props.forecast.MaximumTemperature;
        let min = this.props.forecast.MinimumTemperature;

        let icon = (this.props.forecast.IconDay < 10) ? '0' + this.props.forecast.IconDay : this.props.forecast.IconDay;
        let imgSource = `https://developer.accuweather.com/sites/default/files/${icon}-s.png`

        return (
            <div className="text-center h-100" style={{ backgroundColor: this.getBackground(), color: 'white'}}>
                <div className="row mx-0 h-100">
                    <div className="col date my-auto">
                        <span className="d-block dayOfWeek">{dayOfWeek}</span>
                        <span className="d-block dayOfMonth">{dayOfMonth}</span>
                        <span className="d-block month">{month}</span>
                    </div>

                    <div className="col forecastIcon my-auto">
                        <img src={imgSource} alt={this.props.forecast.DescriptionDay}></img><br />
                    </div>

                    <div className="col temperature my-auto">
                        <span className="d-block maximumTemperature">{max}ºC</span>
                        <span className="d-block minimumTemperature">{min}ºC</span>
                    </div>
                </div>
            </div>
        );
    }

}

export default ForecastOfDay;