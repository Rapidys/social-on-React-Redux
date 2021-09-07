import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuth} from "../../redux-store/auth";


class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuth()
    }

    render() {
        return <Header {...this.props}/>
    }
}

let MapStateToProps = (state) => ({
    isAuth : state.auth.isAuth,
    login : state.auth.login,
    userProfile :state.Profile.userProfile
})
let MapDispatchToProps = (dispatch) => {
    return {

        getAuth : () => {
            dispatch(getAuth())
        }

    }
}
export default connect(MapStateToProps,MapDispatchToProps)(HeaderContainer);