export function fetchError(state = false, action) {
    switch (action.type) {
        case 'FETCH_ERROR':
            return action.hasError;
        default:
            return state;
    }
}

export function dataIsLoading(state = false, action) {
    switch (action.type) {
        case 'DATA_IS_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}

export function weatherData(state = [], action) {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return action.data;
        default:
            return state;
    }
}