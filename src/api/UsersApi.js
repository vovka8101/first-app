import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});

export const usersData = {
  getUsers(pageNumber = 1, pageSize = 10) {
    return instance(`users?page=${pageNumber}&count=${pageSize}`)
      .then(response => response.data)
  },
  getProfile(profileId) {
    return instance(`profile/${profileId}`)
      .then(response => response.data)
  }
};
