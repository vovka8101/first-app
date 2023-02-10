let initialState = {
  friends: [
    { id: 1, name: 'Mark', photo: 'https://picsum.photos/id/230/200/200' },
    { id: 2, name: 'Jackson', photo: 'https://picsum.photos/id/235/200/200' },
    { id: 3, name: 'New User', photo: 'https://picsum.photos/id/236/200/200' },
    { id: 4, name: 'Tony', photo: 'https://picsum.photos/id/11/200/200' }
  ]
};

const navbarReducer = (state = initialState, action) => {
  return state;
};

export default navbarReducer;