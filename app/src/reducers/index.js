import { combineReducers } from 'redux';
import {fetchError, dataIsLoading, weatherData} from './weather';

export default combineReducers({
    fetchError,
    dataIsLoading,
    weatherData
})