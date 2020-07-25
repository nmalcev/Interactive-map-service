import {
    PLACEDATA_LOADING_STARTED,
    PLACEDATA_LOADED,
    PLACEDATA_CANT_BE_DOWNLOADED,
    PLACEDATA_LOADING_COMPLETED,
    NAVIGATE_TO_FEATUTE
} from './mainActionTypes';
import downloadPlaceData from '../downloaders/downloadPlaceData';
import {MAP_ROUTE} from '../../components/routes/routes';


export const startLoadingPlaceData = query => ({
    type: PLACEDATA_LOADING_STARTED,
    query
});
export const placeDataLoaded = features => ({
    type: PLACEDATA_LOADED,
    payload: features
});
export const loadFailed = () => ({
    type: PLACEDATA_CANT_BE_DOWNLOADED
});
export const loadCompleted = () => ({
    type: PLACEDATA_LOADING_COMPLETED
});


export const findPlace = (query) => {
    return (dispatch, getState) => {
        dispatch(startLoadingPlaceData(query));
        downloadPlaceData(query)
            .then(features => {
                dispatch(placeDataLoaded(features));
            }).catch(requestError => {
                dispatch(loadFailed(requestError));
            }).finally(() => {
                dispatch(loadCompleted());
            });
    };
};

export const navigateToPlace = (featureId, history) => {
    return dispatch => {
        dispatch({
            type: NAVIGATE_TO_FEATUTE,
            payload: featureId 
        });
        history.push(MAP_ROUTE);
    };
};
