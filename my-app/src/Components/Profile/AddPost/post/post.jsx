import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div>
            <div className={s.imgContainer}>
                <img src={props.img} alt="#"/>

            </div>
            <div>
                Likes : {props.likesCount}
                <div>
                    <b>{props.Message}</b>

                </div>
            </div>

        </div>
    );
};

export default Post;