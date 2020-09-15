import React from 'react'
import {addPostCreator, updateNewPostTextCreator} from "../../../Redux/profileReducer";
import Posts from "./Posts";

//Задача контейнерной компоненты удовлетворить нужны презентационной(Posts.jsx)
const PostsContainer = (props) => {
let state = props.store.getState()

const updateNewPostText = (text) => {
    let action = updateNewPostTextCreator(text);
    props.store.dispatch(action)
}
const addPost = () => {
    let action = addPostCreator()
    props.store.dispatch(action)
}

    return (<Posts addPost={addPost} updateNewPostText={updateNewPostText}
                   newPostText={state.profilePage.newPostText}
                   posts={state.profilePage.posts}/>)
}

export default PostsContainer