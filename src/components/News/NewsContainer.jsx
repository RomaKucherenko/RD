import React from "react";
import {addNews} from "../../Redux/newsReducer";
import {connect} from "react-redux";
import News from "./News";

let mapStateToProps = (state) => {
    return {
        news: [...state.news.news]
    }
}
let dispatchObj = {
    addNews
}

const NewsContainer = connect(mapStateToProps, dispatchObj)(News)

export default NewsContainer
