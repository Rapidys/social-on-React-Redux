import axios from "axios";

const instance = axios.create({
    withCredentials:true,
    headers: {
        "API-KEY": "5288cedc-fa33-4575-bb05-667cd5f898b3"
    },
    baseURL : `https://social-network.samuraijs.com/api/1.0`
})

const usersAPI = {
    API (PgSize , currentPage)  {
        return instance.get(`/users?count=${PgSize}&page=${currentPage}`,{
            withCredentials:true,
        })

    },
    followApi (userId) {
        return instance.post(`/follow/${userId}`)
    },
    unfollowApi (userId) {
        return instance.delete(`/follow/${userId}`)
    },
    usersPagination (userId) {
        return instance.get(`/profile/ ${userId}`)

    }
}
export const Auth = {
    authAPI () {
        return instance.get(`/auth/me`)
    }
}
export default usersAPI