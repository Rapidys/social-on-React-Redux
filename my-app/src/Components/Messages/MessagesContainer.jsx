import {connect} from "react-redux";
import Messages from "./Messages";
let MapStateToProps = (state) => ({
   Friends : state.Messages.Friends
})
// MapDispatchToProps
let MessagesContainer = connect(MapStateToProps )(Messages)

export default MessagesContainer