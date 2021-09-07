import React from 'react';
import s from './Messages.module.css'
const Messages = (props) => {
    return (
        <div className={s.wrapper}>
            <div className={s.FriendsSection}>
                {props.Friends.map(f => {
                    return <div className={s.Friends}>
                        <div className={s.FriendsImgs}>
                            <img src={f.img} alt="friends"/>
                        </div>
                        <div className={s.FriendsNames}>{f.Firstname} {f.LastName}</div>
                    </div>
                })}
            </div>
            <div className={s.Messages}>
                    <div>
                        Message 1
                    </div> <div>
                        Message 1
                    </div> <div>
                        Message 1
                    </div> <div>
                        Message 1
                    </div> <div>
                        Message 1
                    </div>
            </div>
        </div>
    );
};

export default Messages;