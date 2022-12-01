const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

const store = {
  // private data
  _state: {
    profile: {
      posts: [
        { id: 1, message: 'Lorem ipsum dolor sit amet.', likesCount: 5, imgSrc: 'https://picsum.photos/id/555/200/200' },
        { id: 2, message: 'The second post.', likesCount: 12, imgSrc: 'https://picsum.photos/id/43/200/200' },
        { id: 3, message: 'Some new post text.', likesCount: 16, imgSrc: 'https://picsum.photos/id/389/200/200' },
        { id: 4, message: 'New post test', likesCount: 8, imgSrc: 'https://picsum.photos/id/98/200/200' },
        { id: 5, message: 'New post from index.js', likesCount: 3, imgSrc: 'https://picsum.photos/id/299/200/200' }
      ],
      changeTextareaMsg: ''
    },
    dialogs: {
      users: [
        { id: 1, name: 'Mark', imgSrc: 'https://picsum.photos/id/230/200/200' },
        { id: 2, name: 'Steven', imgSrc: 'https://picsum.photos/id/233/200/200' },
        { id: 3, name: 'Jackson', imgSrc: 'https://picsum.photos/id/235/200/200' },
        { id: 4, name: 'New user', imgSrc: 'https://picsum.photos/id/236/200/200' },
        { id: 5, name: 'New user long name', imgSrc: 'https://picsum.photos/id/236/200/200' },
        { id: 6, name: 'Last user', imgSrc: 'https://picsum.photos/id/236/200/200' }
      ],
      messages: [
        { id: 1, message: 'Lorem ipsum some text bla bla' },
        { id: 2, message: 'Lorem ipsum dolor sit.' },
        { id: 3, message: 'Lorem ipsum dolor sit amet consectetur adipisicing.' },
        { id: 4, message: 'New message' }
      ],
      currentTypedText: ''
    },
    navbar: {
      friends: [
        { id: 1, name: 'Mark', photo: 'https://picsum.photos/id/230/200/200' },
        { id: 2, name: 'Jackson', photo: 'https://picsum.photos/id/235/200/200' },
        { id: 3, name: 'New User', photo: 'https://picsum.photos/id/236/200/200' },
        { id: 4, name: 'Tony', photo: 'https://picsum.photos/id/11/200/200' }
      ]
    }
  },
  _renderComponentsTree: undefined,
  _generateId(arr) {
    return arr[arr.length - 1].id + 1;
  },
  // public methods
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._renderComponentsTree = observer;
  },

  updatePostText(text) {
    this._state.profile.changeTextareaMsg = text;
  },
  addPost() {
    let msg = this._state.profile.changeTextareaMsg;
    const newId = this._generateId(this._state.profile.posts);
    const newPost = {id: newId, message: msg, likesCount: 0, imgSrc: 'https://picsum.photos/id/299/200/200'};
    this._state.profile.posts.push(newPost);
    this._state.profile.changeTextareaMsg = '';
    this._renderComponentsTree(this._state);
  },
  updateMessageText(text) {
    this._state.dialogs.messages.currentTypedText = text;
  },
  addMessage() {
    let msg = this._state.dialogs.messages.currentTypedText;
    const newId = this._generateId(this._state.profile.posts);
    const newMessage = {id: newId, message: msg};
    this._state.dialogs.messages.push(newMessage);
    this._state.dialogs.messages.currentTypedText = '';
    this._renderComponentsTree(this._state);
  },

  dispatch(action) {
    if (action.type === UPDATE_POST_TEXT) {
      this._state.profile.changeTextareaMsg = action.text;
    } else if (action.type === ADD_POST) {
      let msg = this._state.profile.changeTextareaMsg;
      const newId = this._generateId(this._state.profile.posts);
      const newPost = {id: newId, message: msg, likesCount: 0, imgSrc: 'https://picsum.photos/id/299/200/200'};
      this._state.profile.posts.push(newPost);
      this._state.profile.changeTextareaMsg = '';
      this._renderComponentsTree(this._state);
    } else if (action.type === UPDATE_MESSAGE_TEXT) {
      this._state.dialogs.messages.currentTypedText = action.text;
    } else if (action.type === ADD_MESSAGE) {
      let msg = this._state.dialogs.messages.currentTypedText;
      const newId = this._generateId(this._state.profile.posts);
      const newMessage = {id: newId, message: msg};
      this._state.dialogs.messages.push(newMessage);
      this._state.dialogs.messages.currentTypedText = '';
      this._renderComponentsTree(this._state);
    }
  }
}

export const addPostActionCreator = () => ({type: ADD_POST});

export const updatePostTextActionCreator = (text) => {
  return {type: UPDATE_POST_TEXT, text: text}
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});

export const updateMessageTextActionCreator = (msg) => {
  return {type: UPDATE_MESSAGE_TEXT, text: msg};
}


window.state = store.getState();


export default store;