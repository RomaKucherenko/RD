import React from 'react'
import {addLikeCreator, addPostCreator, updateNewPostTextCreator} from "../../../Redux/profileReducer";
import Posts from "./Posts";
import {connect} from "react-redux";

//Задача контейнерной компоненты удовлетворить нужны презентационной(Posts.jsx)
// const PostssContainer = () => {
//     return <StoreContext.Consumer>
//         {
//             (store) => {
//                 let state = store.getState().profilePage
//
//                 const updateNewPostText = (text) => {
//                     let action = updateNewPostTextCreator(text);
//                     store.dispatch(action)
//                 }
//                 const addPost = () => {
//                     let action = addPostCreator()
//                     store.dispatch(action)
//                 }
// //Я могу создать контейнерную компененту для Post и закинуть эту функцию туда,
// // но пока не буду этого делать -_-
//                 const addLike = (id) => {
//                     let action = addLikeCreator(id)
//                     store.dispatch(action)
//                 }
//                 return <Posts addPost={addPost} updateNewPostText={updateNewPostText}
//                               newPostText={state.newPostText} addLike={addLike}
//                               posts={state.posts}/>
//             }
//         }
//
//     </StoreContext.Consumer>
// }

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostCreator())
        },
        addLike: (id) => {
            dispatch(addLikeCreator(id))
        },
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextCreator(text))
        }
    }
}
//Крч вчера пришёл к выводу:
//круговорот данных работает нормально
//connect вызывается единажды и не отрисовывает изменение этих данных
let PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)
//Мы удалили rerenderEntireTree() потому что connect возвращает компоненту, которая имеет свой локальный
//subcribe.
// Это удобно, тк она сама решает нужно ли ей перерисовываться или нет и перерисовывается ТОЛЬКО ОНА, А НЕ ВСЁ ДЕРЕВО

export default PostsContainer