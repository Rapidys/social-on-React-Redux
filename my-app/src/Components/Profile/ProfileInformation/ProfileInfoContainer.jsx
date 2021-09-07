import {connect} from "react-redux";
import {getProfile, ToggleIsFetching, ToggleIsFetchingAC} from "../../../redux-store/ProfileReducer";
import React from "react";
import ProfileInfo from "./ProfileInformation";
import { withRouter } from "react-router-dom";
import Preloader from "../../Preloader/Preloader";


class ProfileInformation extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        this.props.getProfile(userId)

        if(!userId){
            userId = 5
            this.props.getProfile(userId)

        }



    }

    render() {
        if(!this.props.userProfile){
            this.props.ToggleFetching(true)
            return <Preloader />
        }

        return <ProfileInfo {...this.props} />
    }
}

let MapStateToProps = (state) => ({
    userProfile: state.Profile.userProfile
})
let MapDispatchToProps = (dispatch) => {

    return {
        getProfile : (userId) =>{

            dispatch(getProfile(userId))
        },
        ToggleFetching : (isFetching) => {
            dispatch(ToggleIsFetching(isFetching))
        }

    }

}


let withUrlTakerForProfile = withRouter(ProfileInformation)

export let ProfileInfoContainer = connect(MapStateToProps , MapDispatchToProps)(withUrlTakerForProfile)