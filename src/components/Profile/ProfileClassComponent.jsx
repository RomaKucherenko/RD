import React from 'react';
import Profile from "./Profile";
import {authAPI, profileAPI} from "../../dalAPI/dalAPI";

class ProfileClassComponent extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            authAPI.authAttempt().then(data => {
                    if (data.resultCode === 0) {
                        let {id} = data.data
                            profileAPI.getProfile(id).then(userData => {
                                    this.props.setUserProfile(userData)
                                }
                            )
                    }
                }
            )
        }
        else {
            profileAPI.getProfile(userId).then(data => {
                        this.props.setUserProfile(data)
                    }
                )
        }
    }

    render() {
        return <Profile {...this.props}/>
    }
}

export default ProfileClassComponent