const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

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
  changeTextareaMsg: ''
}

const profileReducer = (state = initialState, action) => {
  let stateCopy = {...state};
  switch (action.type) {
    case UPDATE_POST_TEXT: {
      stateCopy.changeTextareaMsg = action.text;
      break;
    }
    case ADD_POST: {
      stateCopy.posts = [...state.posts];
      let msg = stateCopy.changeTextareaMsg;
      const newId = generateId(stateCopy.posts);
      const newPost = {id: newId, message: msg, likesCount: 0, imgSrc: 'https://picsum.photos/id/299/200/200'};
      stateCopy.posts.push(newPost);
      stateCopy.changeTextareaMsg = '';
      break;
    }
    default:
      break;
  }

  return stateCopy;
}

export const addPostActionCreator = () => ({type: ADD_POST});

export const updatePostTextActionCreator = (text) => {
  return {type: UPDATE_POST_TEXT, text: text}
}


export default profileReducer;