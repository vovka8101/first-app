const ADD_MESSAGE = 'ADD-MESSAGE';

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
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      const newId = generateId(state.messages);
      const newMessage = {id: newId, message: action.message};
      return {
        ...state,
        messages: [...state.messages, newMessage]
      }
    }
    default: return state;
  }
}

export const addMessage = (message) => ({type: ADD_MESSAGE, message});

export default dialogsReducer;