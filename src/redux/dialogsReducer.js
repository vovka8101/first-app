const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

const generateId = (arr) => {
  return arr[arr.length - 1].id + 1;
}

const dialogsReducer = (state, action) => {
  if (action.type === UPDATE_MESSAGE_TEXT) {
    state.currentTypedText = action.text;
  }
  else if (action.type === ADD_MESSAGE) {
    let msg = state.currentTypedText;
    const newId = generateId(state.messages);
    const newMessage = {id: newId, message: msg};
    state.messages.push(newMessage);
    state.currentTypedText = '';
  }

  return state;
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});

export const updateMessageTextActionCreator = (msg) => {
  return {type: UPDATE_MESSAGE_TEXT, text: msg};
}

export default dialogsReducer;