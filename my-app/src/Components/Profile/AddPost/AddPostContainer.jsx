import {connect} from "react-redux";
import AddPost from "./AddPost";
import {AddPostAC, AddWordsAC} from "../../../redux-store/ProfileReducer";

let MapStateToProps = (state) => ({
    posts: state.Profile.Posts,
    inputValue : state.Profile.inputValue

})
let MapDispatchToProps = (dispatch) => {
    return {
        addWords : (Words)=>{
            dispatch(AddWordsAC(Words))
        },
        AddPost : ()=>{
            dispatch(AddPostAC())
        }
    }

}
let AddPostContainer = connect(MapStateToProps , MapDispatchToProps)(AddPost)

export default AddPostContainer
