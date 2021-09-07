import {connect} from "react-redux";
import {
    getFollowed, getUnFollowed, getUsers, isToggleFetching, SetCurrentPage, ToggleIsFetching,

} from "../../redux-store/UsersReducer";
import Users from "./Users";

let MapStateToProps = (state) => ({

    users: state.Users.users,
    PgSize: state.Users.PgSize,
    totalCount: state.Users.totalCount,
    currentPage: state.Users.currentPage,
    isToggleFetching : state.Users.isToggleFetching
})

let MapDispatchToProps = (dispatch) => {
    return {

        SetCurrentPage: (PageNumber) => {
            dispatch(SetCurrentPage(PageNumber))
        },

        getUsers: (PgSize, currentPage) => {
            dispatch(getUsers(PgSize, currentPage))
        },
        getUnFollowed: (userId) => {
            dispatch(getUnFollowed(userId))
        },
        getFollowed: (userId) => {
            dispatch(getFollowed(userId))
        },


    }
}

let UsersContainer = connect(MapStateToProps, MapDispatchToProps)(Users)

export default UsersContainer