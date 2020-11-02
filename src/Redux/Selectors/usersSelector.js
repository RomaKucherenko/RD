import {createSelector} from "reselect";

const getUsersSelector = (state) => state.usersPage.users
export const getIsFetching = (state) => state.usersPage.isFetching
export const getUsersInFollowingProgress = (state) => state.usersPage.usersInFollowingProgress
export const getTotalUsersCount = (state) => state.usersPage.totalUsersCount
export const getUsers = createSelector(getUsersSelector,
    (users) => {
        return users.filter(u => true)
})