import React from 'react';
import s from "../Profile.module.css";
import Post from "./post/post";


const AddPost = (props) => {
    let PostItems = props.posts.map(p => <Post img={p.img} likesCount={p.likesCount} Message={p.Message} key = {p.id}/>)

    let inpRef = React.createRef()

    function addWords() {
        let inpVal = inpRef.current.value
        props.addWords(inpVal)
    }
function AddPost () {
        props.AddPost()
}
    return (

        <div className={s.addPostSection}>
            <input type="text" value={props.inputValue} ref={inpRef}
                   placeholder='Anything New ?'
                   onChange={addWords}
            />
            <div>
                <button onClick={AddPost}>
                    Add
                </button>
            </div>


            <div>
                {PostItems}
            </div>
        </div>
    );
};

export default AddPost;