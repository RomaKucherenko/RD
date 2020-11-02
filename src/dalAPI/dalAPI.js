import * as axios from "axios";

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        "API-KEY": "31496dd4-dfd5-4991-a785-9c28daa3f4bc"
    }
})

export const usersAPI = {
    requestUsers(pageNubmer = 1, pageSize = 10) {
        return instance.get(`users?page=${pageNubmer}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    }
}
export const authAPI = {
    authAttempt() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    },
    login(email, password, rememberMe) {
        return instance.post(`auth/login`, {
            email, password, rememberMe
        }).then(response => {
                return response.data
            }
        )
    },
    logout() {
        return instance.delete(`auth/login`).then(response => {
                return response.data
            }
        )
    }
}
export const followAPI = {
    unfollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data.resultCode)
    },
    follow(id) {
        return instance.post(`follow/${id}`)
            .then(response => response.data.resultCode)
    }
}
export const profileAPI = {
    getProfile(id) {
        return instance.get(`/profile/${id}`)
            .then(response => response.data)
    },
    updateStatus(status) {
        return instance.put(`/profile/status`, {status})
            .then(response => response.data.resultCode)
    },
    getStatus(id) {
        return instance.get(`/profile/status/${id}`)
            .then(response => response.data)
    }
}