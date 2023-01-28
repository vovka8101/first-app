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
  follow(userId) {
    return instance.post(`follow/${userId}`)
      .then(response => response.data.resultCode)
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`)
      .then(response => response.data.resultCode)
  }
};

export const profileAPI = {
  getProfile(profileId) {
    return instance.get(`profile/${profileId}`)
      .then(response => response.data)
  },
  getProfileStatus(profileId) {
    return instance.get(`profile/status/${profileId}`)
      .then(response => response.data)
  },
  updateProfileStatus(status) {
    return instance.put(`profile/status`, { status });
  }
};

export const authAPI = {
  userAuth() {
    return instance.get('auth/me')
      .then(response => response.data)
  },
  login(email, password, rememberMe) {
    return instance.post('auth/login', { email, password, rememberMe })
  },
  logout() {
    return instance.delete('auth/login')
  }
};