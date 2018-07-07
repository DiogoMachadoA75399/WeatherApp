import * as services from '../services';


export function fetchError(bool) {
    return {
        type: 'FETCH_ERROR',
        hasError: bool,
    }
}

export function dataIsLoading(bool) {
    return {
        type: 'DATA_IS_LOADING',
        isLoading: bool,
    }
}

export function fetchSuccess(data) {
    return {
        type: 'FETCH_SUCCESS',
        data,
    }
}

export function changeLocation(location) {
    return {
        type: 'CHANGE_LOCATION',
        location,
    }
}

export function weatherFetchData(city, country) {
    return (dispatch) => {
        dispatch(dataIsLoading(true));

        services.getDailyForecasts(5, '272363')
            .then((dailyForecasts) => {
                dispatch(fetchSuccess(dailyForecasts));
                dispatch(dataIsLoading(false));
            })
            .catch((error) => dispatch(fetchError()));
    }
}