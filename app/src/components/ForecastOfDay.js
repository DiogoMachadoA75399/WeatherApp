import React, { Component } from 'react';
import moment from 'moment';

class ForecastOfDay extends Component {

    getBackground = () => {

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
        console.log(this.props.forecast);

        return (
            <div >
                <div className="row">
                    <div className="col text-center">
                        <div>
                            <span className="d-block" style={{ fontSize: '5vw' }}>{dayOfWeek}</span>
                            <span className="d-block" style={{ fontSize: '7vw', margin: '-15px 0px' }}>{dayOfMonth}</span>
                            <span className="d-block" style={{ fontSize: '2.2vw' }}>{month}</span>
                        </div>
                        <div className="py-5">
                            <img src={imgSource} alt={this.props.forecast.DescriptionDay}></img>
                        </div>
                        <div>
                            <span className="d-block" style={{ fontSize: '2.2vw' }}>{max}ºC</span>
                            <span className="d-block" style={{ fontSize: '2.2vw' }}>{min}ºC</span>
                        </div>
                    </div>
                </div>
            </div >
        );
    }

}

export default ForecastOfDay;