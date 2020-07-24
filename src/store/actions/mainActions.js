import {
    PLACEDATA_LOADING_STARTED,
    PLACEDATA_LOADED,
    PLACEDATA_CANT_BE_DOWNLOADED,
    PLACEDATA_LOADING_COMPLETED
} from './mainActionTypes';

export const startLoadingPlaceData = query => ({
    type: PLACEDATA_LOADING_STARTED,
    query
});
export const placeDataLoaded = profileId => ({
    type: PLACEDATA_LOADED,
    profileId
});
export const loadFailed = () => ({
    type: PLACEDATA_CANT_BE_DOWNLOADED
});
export const loadCompleted = () => ({
    type: PLACEDATA_LOADING_COMPLETED
});


export const findPlace = (query, history) => {
    return (dispatch, getState) => {
        dispatch(startLoadingPlaceData(query));
        downloadPlaceData(query).
            then(profileData => {

                // dispatch(userProfileLoaded(profileData.id));
                // TODO dispatch to the collection
                console.log('STATE');
                console.dir(getState());
                // dispatch(updateProfile(profileData));

                // navigate on the next page
                history.push(USER_ROUTE);
            }).catch(requestError => {
                console.warn('requestError');
                console.dir(requestError);
                dispatch(loadFailed());
            }).finally(() => {
                dispatch(loadCompleted());
            });
    };
};
