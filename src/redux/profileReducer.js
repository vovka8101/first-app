import { profileAPI } from "../api/UsersApi";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS';
const DELETE_POST = 'DELETE_POST';

const generateId = (arr) => {
  return arr[arr.length - 1].id + 1;
};

let initialState = {
  posts: [
    { id: 1, message: 'Lorem ipsum dolor sit amet.', likesCount: 5, imgSrc: 'https://picsum.photos/id/555/200/200' },
    { id: 2, message: 'The second post.', likesCount: 12, imgSrc: 'https://picsum.photos/id/43/200/200' },
    { id: 3, message: 'Some new post text.', likesCount: 16, imgSrc: 'https://picsum.photos/id/389/200/200' },
    { id: 4, message: 'New post test', likesCount: 8, imgSrc: 'https://picsum.photos/id/98/200/200' },
    { id: 5, message: 'New post from index.js', likesCount: 3, imgSrc: 'https://picsum.photos/id/299/200/200' }
  ],
  profile: null,
  profileStatus: ''
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      const newId = generateId(state.posts);
      const newPost = { id: newId, message: action.postMessage, likesCount: 0, imgSrc: 'https://picsum.photos/id/299/200/200' };
      debugger;
      return {
        ...state,
        posts: [newPost, ...state.posts]
      }
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter(p => p.id !== action.postId)
      }
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case SET_PROFILE_STATUS: {
      return { ...state, status: action.status }
    }
    default: return state;
  }
};

// ----------------------- Action Creators -----------------------
export const addPost = (postMessage) => ({ type: ADD_POST, postMessage });

export const deletePost = (postId) => ({ type: DELETE_POST, postId });

export const setUserProfile = (profile) => {
  return { type: SET_USER_PROFILE, profile };
};

export const setProfileStatus = (status) => {
  return { type: SET_PROFILE_STATUS, status };
};

// ----------------------- Redux-Thunk -----------------------
export const getProfile = (profileId) => {
  return async (dispatch) => {
    const data = await profileAPI.getProfile(profileId);
    dispatch(setUserProfile(data));
  }
};

export const getProfileStatus = (profileId) => {
  return async (dispatch) => {
    const status = await profileAPI.getProfileStatus(profileId);
    dispatch(setProfileStatus(status));
  }
};

export const updateProfileStatus = (status) => {
  return async (dispatch) => {
    const response = await profileAPI.updateProfileStatus(status);
    if (response.data.resultCode === 0) {
      dispatch(setProfileStatus(status));
    } else {
      console.log('Error to update profile status');
    }
  }
};

export default profileReducer;