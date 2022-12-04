const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

const generateId = (arr) => {
  return arr[arr.length - 1].id + 1;
}

const renderProfile = (state, action) => {
  if (action.type === UPDATE_POST_TEXT) {
    state.changeTextareaMsg = action.text;
  }
  else if (action.type === ADD_POST) {
    let msg = state.changeTextareaMsg;
    const newId = generateId(state.posts);
    const newPost = {id: newId, message: msg, likesCount: 0, imgSrc: 'https://picsum.photos/id/299/200/200'};
    state.posts.push(newPost);
    state.changeTextareaMsg = '';
  }
  return state;
}

export const addPostActionCreator = () => ({type: ADD_POST});

export const updatePostTextActionCreator = (text) => {
  return {type: UPDATE_POST_TEXT, text: text}
}


export default renderProfile;