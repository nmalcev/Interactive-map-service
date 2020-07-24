import React, { Component } from 'react';
import {connect} from 'react-redux';
// import { getFollowingListThunk } from '../../../store/actions/profileCollection';

class DataPage extends Component {
	render() {
        return (
            <>
                <h1>DataPage</h1>

                {/* <UserBadge 
                    avatar={this.props.activeProfile.profile_pic_url} 
                    name={this.props.activeProfile.username} 
                    biography={this.props.activeProfile.biography}/>
                <FollowerList 
                    profile={this.props.activeProfile} 
                    getFollowingList={this.props.getFollowingList}>
                </FollowerList> */}
            </>
        );
	}
}

export default connect(
    state => {
        const featureId = state.mainState.featureId;
        const activeFeature = '';

        console.log('STATE');
        console.dir(state);
        
        return ({
            activeFeature,
        });
    },
    null
    // dispatch => ({
    //     getFollowingList: igUserId => dispatch(getFollowingListThunk(igUserId)),
    // })
)(DataPage);
