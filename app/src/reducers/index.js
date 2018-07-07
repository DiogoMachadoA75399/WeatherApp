import { combineReducers } from 'redux';
import { fetchError, dataIsLoading, weatherData, location } from './weather';

export default combineReducers({
    fetchError,
    dataIsLoading,
    weatherData,
    location,
})