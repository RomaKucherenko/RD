import React from 'react'
import {addLikeCreator, addPostCreator, updateNewPostTextCreator} from "../../../Redux/profileReducer";
import Posts from "./Posts";
import StoreContext from "../../../StoreContext";

//Задача контейнерной компоненты удовлетворить нужны презентационной(Posts.jsx)
const PostsContainer = () => {



    return <StoreContext.Consumer>
        {
            (store) => {
                let state = store.getState().profilePage

                const updateNewPostText = (text) => {
                    let action = updateNewPostTextCreator(text);
                    store.dispatch(action)
                }
                const addPost = () => {
                    let action = addPostCreator()
                    store.dispatch(action)
                }
//Я могу создать контейнерную компененту для Post и закинуть эту функцию туда,
// но пока не буду этого делать -_-
                const addLike = (id) => {
                    let action = addLikeCreator(id)
                    store.dispatch(action)
                }
               return <Posts addPost={addPost} updateNewPostText={updateNewPostText}
                       newPostText={state.newPostText} addLike={addLike}
                       posts={state.posts}/>
            }
        }

    </StoreContext.Consumer>


}

export default PostsContainer