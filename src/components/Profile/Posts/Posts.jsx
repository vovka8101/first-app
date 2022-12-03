import Post from './Post/Post';
import s from './Posts.module.css';
import React from 'react';
import { addPostActionCreator, updatePostTextActionCreator } from '../../../redux/state';

const Posts = (props) => {

  const postsElements = props.profile.posts
    .map(post => <Post message={post.message} likesCount={post.likesCount} photo={post.imgSrc} />)


  const addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  const updateTextarea = (event) => {
    console.log(event.target.value);
    let text = event.target.value;
    props.dispatch(updatePostTextActionCreator(text));
  }

  return (
    <div className={s.postsContent}>
      <div>
        <textarea onChange={updateTextarea} value={props.profile.changeTextareaMsg}></textarea>
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