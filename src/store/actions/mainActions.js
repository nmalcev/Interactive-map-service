import * as actions from './mainActionTypes';
import downloadProfile from '../downloaders/downloadProfile';
import {updateProfile} from './profileCollection';

// import 

export const startLoadingUserProfile = userName => ({
    type: actions.PROFILE_LOADING_STARTED,
    requestedUserName: userName
});
export const userProfileLoaded = profileId => ({
    type: actions.PROFILE_LOADED,
    profileId
});
export const loadFailed = () => ({
    type: actions.PROFILE_CANT_BE_DOWNLOADED
});
export const loadCompleted = () => ({
    type: actions.PROFILE_LOADING_COMPLETED
})

const USER_ROUTE = '/user';

// TODO use moxios to create mock and test
export const processUserProfile = (username, history) => {
    return (dispatch, getState) => {
        dispatch(startLoadingUserProfile(username));
        downloadProfile(username).
            then(profileData => {

                dispatch(userProfileLoaded(profileData.id));
                // TODO dispatch to the collection
                console.log('STATE');
                console.dir(getState());
                dispatch(updateProfile(profileData));

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
