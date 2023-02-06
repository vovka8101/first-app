import profileReducer, { addPost, deletePost } from "../profileReducer";

const state = {
  posts: [
    { id: 1, message: 'Lorem ipsum dolor sit amet.', likesCount: 5, imgSrc: 'https://picsum.photos/id/555/200/200' },
    { id: 2, message: 'The second post.', likesCount: 12, imgSrc: 'https://picsum.photos/id/43/200/200' },
    { id: 3, message: 'Some new post text.', likesCount: 16, imgSrc: 'https://picsum.photos/id/389/200/200' },
    { id: 4, message: 'New post test', likesCount: 8, imgSrc: 'https://picsum.photos/id/98/200/200' },
    { id: 5, message: 'New post from index.js', likesCount: 3, imgSrc: 'https://picsum.photos/id/299/200/200' }
  ]
};

it('should increment posts length', () => {
  const action = addPost('new post text from test.js');
  const newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(6);
})

it('should decrement posts length', () => {
  const action = deletePost(5);
  const newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(4);
});
