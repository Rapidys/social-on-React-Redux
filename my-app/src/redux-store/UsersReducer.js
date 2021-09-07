import usersAPI from "../DAL/API";

let initialState = {
    users: [],
    PgSize: 40,
    totalCount: 0,
    currentPage: 2,
    isToggleFetching: false,
}

let UsersReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'SET-USERS': {
            return {
                ...state,
                users: action.users
            }
        }
        case 'SET-TOTAL-COUNT': {
            return {
                ...state,
                totalCount: action.total
            }
        }
        case 'SET-CURRENT-PAGE': {
            return {
                ...state,
                currentPage: action.PageNumber
            }
        }
        case 'Followed': {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true,}
                    }
                    return u
                })
            }


        }
        case 'unFollowed': {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false,}
                    }
                    return u
                })
            }


        }
        case 'isToggleFetching' : {
            return {
                ...state,
                isToggleFetching: action.isFetching
            }
        }


    }


    return state
}
export const Followed = (userId) => ({type: 'Followed', userId})
export const unFollowed = (userId) => ({type: 'unFollowed', userId})
export const SetUsers = (users) => ({type: 'SET-USERS', users})
export const SetToTal = (total) => ({type: 'SET-TOTAL-COUNT', total})
export const SetCurrentPage = (PageNumber) => ({type: 'SET-CURRENT-PAGE', PageNumber})
export const isToggleFetching = (isFetching) => ({type: 'isToggleFetching', isFetching})


export const getUsers = (PgSize, currentPage) => {
    return (dispatch) => {
        dispatch(isToggleFetching(true))

        usersAPI.API(PgSize, currentPage)
            .then(response => {
                dispatch(isToggleFetching(false))

                dispatch(SetUsers(response.data.items))

                if (response.data.totalCount > 1000) {
                    dispatch(SetToTal(1000))

                }

            })
    }
}

export const getUnFollowed = (userId) => {
    return (dispatch) => {
        usersAPI.unfollowApi(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unFollowed(userId))

                }
            })
    }
}
export const getFollowed = (userId) => {
    return (dispatch) => {
        usersAPI.followApi(userId)

            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(Followed(userId))

                }
            })
    }
}

export default UsersReducer