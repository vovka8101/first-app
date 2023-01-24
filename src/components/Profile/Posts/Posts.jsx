import Post from './Post/Post';
import s from './Posts.module.css';
import React from 'react';
import { Formik, Form, Field } from 'formik';


const Posts = (props) => {

  const postsElements = props.posts
    .map(post => <Post message={post.message} likesCount={post.likesCount} photo={post.imgSrc} key={post.id} />)

  return (
    <div className={s.postsContent}>
      <Formik
        initialValues={{ postMessage: '' }}
        onSubmit={(values, { resetForm }) => {
          props.addPost(values.postMessage);
          resetForm({ values: '' });
        }}
      >
        {({ values }) => (
          <Form>
            <div>
              <Field as='textarea' name='postMessage' />
            </div>
            <div>
              <button type='submit' disabled={!values.postMessage}>Add post</button>
            </div>
          </Form>
        )}
      </Formik>
      <h2>My posts</h2>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
}

export default Posts;