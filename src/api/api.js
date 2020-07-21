import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '7670157b-55fb-46c4-91b5-ea5772613da8'
  }
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data);
  },
  follow(userId) {
    return instance.post(`follow/${userId}`)

  },
  unFollow(userId) {
    return instance.delete(`follow/${userId}`)
  },
  getProfile(userId) {
    console.warn('Obsolute method. Please use profileAPI object')
    return profileAPI.getProfile(userId);
  }
}

export const profileAPI = {
   getProfile(userId) {
    return instance.get(`profile/` + userId);
  },
  getStatus(userId) {
    return instance.get(`profile/status/` + userId);
  },
  updateStatus(status) {
    return instance.put(`profile/status`, {status: status});
  }
}

export const authAPI = {
  me() {
    return instance.get(`auth/me`)
  }
}