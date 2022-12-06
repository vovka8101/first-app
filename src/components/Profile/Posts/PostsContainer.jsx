import React from 'react';
import Posts from './Posts';
import { addPostActionCreator, updatePostTextActionCreator } from '../../../redux/profileReducer';
import MyContext from '../../../context';


const PostsContainer = () => {

  return (
    <MyContext.Consumer>
      {store => {
        let state = store.getState();

        const onAddPost = () => {
          store.dispatch(addPostActionCreator());
        }
      
        const onUpdateTextarea = (text) => {
          store.dispatch(updatePostTextActionCreator(text));
        }

        return (<Posts
          addPost={onAddPost}
          updateTextarea={onUpdateTextarea}
          changeTextareaMsg={state.profile.changeTextareaMsg}
          posts={state.profile.posts} />)
      }}
    </MyContext.Consumer>
  );
}

export default PostsContainer;