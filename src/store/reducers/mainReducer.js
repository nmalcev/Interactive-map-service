// import {
//     UPLOAD_PROFILE,
// } from '../actions/mainActionTypes';

const initialState = {};

const reducer = (state = initialState, action) => {
    let nextState;
    switch (action.type) {
        // case UPLOAD_PROFILE:
        //     nextState = {
        //         ...state, 
        //         [action.id]: action.profileData
        //     };
        //     break;
        default:
            nextState = state;
    }

    return nextState;
};

export default reducer;
