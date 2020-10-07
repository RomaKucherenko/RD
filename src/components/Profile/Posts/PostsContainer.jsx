import React from 'react'
import {addLikeCreator, addPostCreator} from "../../../Redux/profileReducer";
import Posts from "./Posts";
import {connect} from "react-redux";

//Задача контейнерной компоненты удовлетворить нужны презентационной(Posts.jsx)

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch(addPostCreator(newPostText))
        },
        addLike: (id) => {
            dispatch(addLikeCreator(id))
        }
    }
}

let PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)
//Мы удалили rerenderEntireTree() потому что connect возвращает компоненту, которая имеет свой локальный
//subcribe.
// Это удобно, тк она сама решает нужно ли ей перерисовываться или нет и перерисовывается
// ТОЛЬКО ОНА, А НЕ ВСЁ ДЕРЕВО

export default PostsContainer