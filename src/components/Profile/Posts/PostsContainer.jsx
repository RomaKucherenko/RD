import React from 'react'
import {addLikeCreator, addPostCreator, updateNewPostTextCreator} from "../../../Redux/profileReducer";
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
//Я могу создать контейнерную компененту для Post и закинуть эту функцию туда,
// но пока не буду этого делать -_-
    const addLike = (id) => {
        let action = addLikeCreator(id)
        props.store.dispatch(action)
    }


    return (
        <Posts addPost={addPost} updateNewPostText={updateNewPostText}
               newPostText={state.profilePage.newPostText} addLike={addLike}
               posts={state.profilePage.posts}/>
    )
}

export default PostsContainer