import { usersData } from "../api/UsersApi";

const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

const generateId = (arr) => {
  return arr[arr.length - 1].id + 1;
}

let initialState = {
  posts: [
    { id: 1, message: 'Lorem ipsum dolor sit amet.', likesCount: 5, imgSrc: 'https://picsum.photos/id/555/200/200' },
    { id: 2, message: 'The second post.', likesCount: 12, imgSrc: 'https://picsum.photos/id/43/200/200' },
    { id: 3, message: 'Some new post text.', likesCount: 16, imgSrc: 'https://picsum.photos/id/389/200/200' },
    { id: 4, message: 'New post test', likesCount: 8, imgSrc: 'https://picsum.photos/id/98/200/200' },
    { id: 5, message: 'New post from index.js', likesCount: 3, imgSrc: 'https://picsum.photos/id/299/200/200' }
  ],
  changeTextareaMsg: '',
  profile: null
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_POST_TEXT:
      return {
        ...state,
        changeTextareaMsg: action.text
      }
    case ADD_POST: {
      let msg = state.changeTextareaMsg;
      const newId = generateId(state.posts);
      const newPost = { id: newId, message: msg, likesCount: 0, imgSrc: 'https://picsum.photos/id/299/200/200' };
      return {
        ...state,
        posts: [...state.posts, newPost],
        changeTextareaMsg: ''
      }
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    default:
      break;
  }

  return state;
}

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updatePostTextActionCreator = (text) => {
  return { type: UPDATE_POST_TEXT, text: text };
}

export const setUserProfile = (profile) => {
  return { type: SET_USER_PROFILE, profile };
}

export const getProfile = (profileId) => {
  return (dispatch) => {
    usersData.getProfile(profileId)
      .then(data => { dispatch(setUserProfile(data)) });
  }
}

export default profileReducer;