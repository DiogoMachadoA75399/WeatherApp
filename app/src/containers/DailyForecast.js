import React, { Component } from 'react';
import { connect } from 'react-redux';

import { weatherFetchData } from '../actions';

@connect(mapStateToProps, mapDispatchToProps)
export default class DailyForecast extends Component {


    componentDidMount() {
        this.props.fetchData('Braga', 'pt');
    }

    render() {
        console.log(this.props);
        return (
            <div>
                Teste
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        weatherData: state.weatherData,
        hasError: state.fetchError,
        isLoading: state.dataIsLoading,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (city, country) => dispatch(weatherFetchData(city, country)),
    }
}