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
    return instance.get(`users?page=${currentPage}&count=${pageSize}`,
      {withCredentials: true}
    )
      .then(response => response.data);
  },
  follow(userId) {
    return  instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}` )

  },
  unFollow(userId) {
    return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
  }
}