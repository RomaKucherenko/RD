import React from "react";
import {addNews} from "../../Redux/newsReducer";
import {connect} from "react-redux";
import News from "./News";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        news: [...state.news.news]
    }
}
let dispatchObj = {
    addNews
}
let NewsCompose = compose(
    connect(mapStateToProps, dispatchObj)
)(News)


export default NewsCompose
