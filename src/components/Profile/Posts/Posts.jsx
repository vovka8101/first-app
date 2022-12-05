import Post from './Post/Post';
import s from './Posts.module.css';
import React from 'react';
// import { addPostActionCreator, updatePostTextActionCreator } from '../../../redux/profileReducer';


const Posts = (props) => {

  const postsElements = props.posts
    .map(post => <Post message={post.message} likesCount={post.likesCount} photo={post.imgSrc} />)


  const onAddPost = () => {
    props.addPost();
  }

  const onUpdateTextarea = (event) => {
    let text = event.target.value;
    props.updateTextarea(text);
  }

  return (
    <div className={s.postsContent}>
      <div>
        <textarea onChange={onUpdateTextarea} value={props.changeTextareaMsg}></textarea>
      </div>
      <div>
        <button onClick={onAddPost}>Add post</button>
      </div>
      <h2>My posts</h2>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
}

export default Posts;