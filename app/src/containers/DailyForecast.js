import React, { Component } from 'react';
import { connect } from 'react-redux';

import { weatherFetchData } from '../actions';
import ForecastOfDay from '../components/ForecastOfDay';

class DailyForecast extends Component {

    componentDidMount() {
        this.props.fetchData('Braga', 'pt');
    }

    render() {
        let width = (this.props.width || 800) + 'px';
        let height = (this.props.height || 400) + 'px';
        return (
            <div className="container container-fluid border border-secondary rounded" style={{ width, height}}>
                <div className="row p-3">
                    {
                        this.props.weatherData.map(forecastDay => {
                            return (
                                <div className="col-sm px-0" key={forecastDay.Date}>
                                    <ForecastOfDay forecast={forecastDay} />
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        weatherData: state.weatherData,
        location: state.location,
        hasError: state.fetchError,
        isLoading: state.dataIsLoading,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (city, country) => dispatch(weatherFetchData(city, country)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DailyForecast);