import * as axios from "axios";

const instance = {
    usersInstance: axios.create({
        withCredentials: true,
        baseURL: `https://social-network.samuraijs.com/api/1.0/`
    }),
    authInstance: axios.create({
        withCredentials: true,
        baseURL: `https://social-network.samuraijs.com/api/1.0/auth/me`
    }),
    followInstance: axios.create({
        baseURL: `https://social-network.samuraijs.com/api/1.0/follow/`,
        withCredentials: true,
        headers: {
            "API-KEY": "31496dd4-dfd5-4991-a785-9c28daa3f4bc"
        }
    }),
    profileInstance: axios.create({
        baseURL:`https://social-network.samuraijs.com/api/1.0/profile/`
    })
}

export const usersAPI = {
    getUsers(pageNubmer = 1, pageSize = 5) {
        return instance.usersInstance.get(`users?page=${pageNubmer}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    }
}
export const authAPI = {
    authAttempt() {
        return instance.authInstance.get()
            .then(response => {
                console.log(`auth`, response)
                return response.data
            })
    }
}
export const followAPI = {
    unfollow(id) {
        return instance.followInstance.delete(`${id}`)
            .then(response => response.data.resultCode)
    },
    follow(id) {
        return instance.followInstance.post(`${id}`)
            .then(response => response.data.resultCode)
        // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`,{},{
        //     withCredentials: true,
        //     headers:{
        //         "API-KEY": "31496dd4-dfd5-4991-a785-9c28daa3f4bc"
        //     }
        // }
    }
}
export const profileAPI = {
    getProfile(id){
        return instance.profileInstance.get(`${id}`)
            .then(response => response.data)
    }
}