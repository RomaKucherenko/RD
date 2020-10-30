const ADD_NEWS = "news/ADD_NEWS"

let initialState = {
    news: ["Road To The Dream", "Okay"]
}

const newsReducer = (state = initialState, action) => {
    //Reducer только изменяет STATE, вызывать callSubscriber
    //мы не будем, тк это не наша responsibility, наша только в том
    //чтобы изменить STATE. Subscriber должен следить за этим изменением
    switch (action.type) {
        case ADD_NEWS:
            return {
                ...state,
                news: [...state.news, action.news ]
            }
        default:
            return state
    }
}


export const addNews = (news) => ({type: ADD_NEWS, news})

export default newsReducer
