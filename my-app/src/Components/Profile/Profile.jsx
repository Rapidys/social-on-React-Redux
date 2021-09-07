import React from 'react';
import AddPostContainer from "./AddPost/AddPostContainer";
import {ProfileInfoContainer} from "./ProfileInformation/ProfileInfoContainer";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfoContainer/>

            <AddPostContainer/>
        </div>
    );
};

export default Profile;