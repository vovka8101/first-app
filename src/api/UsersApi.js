import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});

export const usersData = {
  getUsers(pageNumber, pageSize) {
    return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
      .then(response => response.data)
  },
  getProfile(profileId) {
    return instance.get(`profile/${profileId}`)
      .then(response => response.data)
  },
  follow(userId) {
    return instance.post(`follow/${userId}`)
      .then(response => response.data.resultCode)
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`)
      .then(response => response.data.resultCode)
  }
};
