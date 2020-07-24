import {
    NAVIGATE_TO_FEATUTE,
    PLACEDATA_LOADING_STARTED,
    PLACEDATA_LOADED,
    PLACEDATA_CANT_BE_DOWNLOADED,
    PLACEDATA_LOADING_COMPLETED
} from '../actions/mainActionTypes';

const initialState = {
    isLoading: false,
    featureId: null,
    features: []
};

const reducer = (state = initialState, action) => {
    let nextState;
    switch (action.type) {
        case NAVIGATE_TO_FEATUTE:
            nextState = {
                ...state,
                featureId: action.payload,
            };
            break;
        case PLACEDATA_LOADING_STARTED:
            nextState = {
                ...state,
                isLoading: true,
                featureId: null,
                features: [] 
            };
            break;
        case PLACEDATA_LOADED:
            nextState = {
                ...state,
                features: action.payload 
            };
            break;
        case PLACEDATA_CANT_BE_DOWNLOADED:
            nextState = {
                ...state, 
            };
            break;
        case PLACEDATA_LOADING_COMPLETED:
            nextState = {
                ...state, 
                isLoading: false
            };
            break;
        default:
            nextState = state;
    }

    return nextState;
};

export default reducer;
