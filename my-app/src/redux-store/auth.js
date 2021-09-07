import {Auth} from "../DAL/API";

let initialState = {
    isAuth : false ,
    id:null,
    email:null,
    login:null,
}

const AuthReducer = (state = initialState ,action) => {
    switch (action.type) {
        case 'SET-USER-DATA' : {
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        }
        case 'isAuth' : {
            return {
                ...state,
                isAuth: action.auth
            }
        }
    }
    return state
}

export let AuthMe = ({id , email,login}) => ({type : 'SET-USER-DATA' ,data : {id , email,login}})
export let isAuthAC = (auth) => ({type : 'isAuth' ,data : auth})

export const getAuth = () => {
    return (dispatch) => {
        Auth.authAPI().then(response => {
            if(response.data.resultCode === 0) {
                let {id , login , email} = response.data.data
                dispatch(AuthMe({id , login , email}))

            }
        })
    }
}

export default AuthReducer