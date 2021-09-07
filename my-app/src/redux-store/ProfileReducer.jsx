import usersAPI from "../DAL/API";

let initialState = {
    Posts: [{
        id: 1,
        img: 'https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg',
        likesCount: 15,
        Message: 'heyyyyy',
    },
        {
            id: 2,
            img: 'https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg',
            likesCount: 25,
            Message: 'heyyyyy2',
        },
        {
            id: 3,
            img: 'https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg',
            likesCount: 35,
            Message: 'heyyyyy3',
        }
    ],
    inputValue: '',

    userProfile: null,
    toggleIsFetching :false,

}
window.state = initialState
let ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-WORDS' : {
            return {

                ...state,
                inputValue: state.inputValue = action.Words
            }


        }
        case 'ADD-POST' : {
            let stateCopy = {...state}
            stateCopy.Posts = [...stateCopy.Posts]
            let newPost = {
                id: 4,
                img: 'https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg',
                likesCount: 0,
                Message: state.inputValue,
            }
            stateCopy.Posts.unshift(newPost)
            stateCopy.inputValue = ''
            return stateCopy
        }
        case 'SET-USER-PROFILE' : {
            return {
                ...state,
                userProfile: action.profile
            }
        }
        case 'TOGGLE-IS-FETCHING' : {
            return {
                ...state,
                toggleIsFetching: action.isFetching
            }
        }
    }
    return state
}
export const SetProfile = (profile) => ({type: 'SET-USER-PROFILE', profile})
export const AddWordsAC = (Words) => ({type: 'ADD-WORDS', Words})
export const AddPostAC = () => ({type: 'ADD-POST'})
export const ToggleIsFetching = (isFetching) => ({type: 'OGGLE-IS-FETCHING',isFetching})

export const getProfile = (userId) => {
    return (dispatch) => {

        usersAPI.usersPagination(userId)
            .then(response => {
                dispatch(SetProfile(response.data))
            })

    }
}

export default ProfileReducer