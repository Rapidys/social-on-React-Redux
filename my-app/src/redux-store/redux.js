import {applyMiddleware, combineReducers, createStore} from "redux";
import ProfileReducer from "./ProfileReducer";
import UsersReducer from "./UsersReducer";
import AuthReducer from "./auth";
import thunk from 'redux-thunk'
import MessagesReducer from "./MessagesReducer";

let reducers = combineReducers({
    Profile : ProfileReducer,
    Users : UsersReducer,
    auth : AuthReducer,
    Messages : MessagesReducer,
})

let store = createStore(reducers , applyMiddleware(thunk))

export default store