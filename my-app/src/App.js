import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Profile from "./Components/Profile/Profile";
import UsersContainer from "./Components/Users/UsersContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import MessagesContainer from "./Components/Messages/MessagesContainer";

function App() {
    return (
        <BrowserRouter>
            <div className='App'>
                <HeaderContainer/>
                <Nav/>
                <Route path = '/Profile/:userId?' render={() => <Profile/>}/>
                <Route  path = '/Users' render={() => <UsersContainer/>}/>
                <Route  path = '/Messages' render={() => <MessagesContainer/>}/>

            </div>
        </BrowserRouter>
    );
}

export default App;
