import React from 'react';
import Posts from './Posts';
import { addPostActionCreator, updatePostTextActionCreator } from '../../../redux/profileReducer';


const PostsContainer = (props) => {

  let state = props.store.getState();

  const onAddPost = () => {
    props.store.dispatch(addPostActionCreator());
  }

  const onUpdateTextarea = (text) => {
    props.store.dispatch(updatePostTextActionCreator(text));
  }
  return (
  <Posts 
    addPost={onAddPost} 
    updateTextarea={onUpdateTextarea} 
    changeTextareaMsg={state.profile.changeTextareaMsg} 
    posts={state.profile.posts} />
  );
}

export default PostsContainer;