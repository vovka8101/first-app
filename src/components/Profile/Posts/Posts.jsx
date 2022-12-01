import Post from './Post/Post';
import s from './Posts.module.css';
import React from 'react';
import { addPostActionCreator, updatePostTextActionCreator } from '../../../redux/state';

const Posts = (props) => {

  const postsElements = props.profile.posts
    .map(post => <Post message={post.message} likesCount={post.likesCount} photo={post.imgSrc} />)

  const newPostElement = React.createRef();

  const addPost = () => {
    props.dispatch(addPostActionCreator());
    newPostElement.current.value = props.profile.changeTextareaMsg;
  }

  const updateTextarea = () => {
    let text = newPostElement.current.value;
    props.dispatch(updatePostTextActionCreator(text));
  }

  return (
    <div className={s.postsContent}>
      <div>
        <textarea onChange={updateTextarea} ref={newPostElement}></textarea>
      </div>
      <div>
        <button onClick={addPost}>Add post</button>
      </div>
      <h2>My posts</h2>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
}

export default Posts;