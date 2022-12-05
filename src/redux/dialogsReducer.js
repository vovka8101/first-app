const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

const generateId = (arr) => {
  return arr[arr.length - 1].id + 1;
}

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_MESSAGE_TEXT:
      state.currentTypedText = action.text;
      break;
    case ADD_MESSAGE:
      let msg = state.currentTypedText;
      const newId = generateId(state.messages);
      const newMessage = {id: newId, message: msg};
      state.messages.push(newMessage);
      state.currentTypedText = '';
      break;
    default:
      break;
  }

  return state;
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});

export const updateMessageTextActionCreator = (msg) => {
  return {type: UPDATE_MESSAGE_TEXT, text: msg};
}

export default dialogsReducer;