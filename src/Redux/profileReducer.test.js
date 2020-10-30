import profileReducer, {addPostCreator} from "./profileReducer";

it('new post will be added', () => {
    //Start Data
    let postMessage = "Test Post"
    let testState = {
        posts: [
            {id: 1, message: "Топи, бро", likesCount: 4},
            {id: 2, message: "Ты станешь программистом!", likesCount: 5}
        ]
    }
    let action = addPostCreator(postMessage)
    //Action
    let newState = profileReducer(testState, action )
    //Expectation
    expect(newState.posts.length).toBe(3)
})