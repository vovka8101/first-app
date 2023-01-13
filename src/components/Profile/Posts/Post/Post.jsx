import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <div className={s.postInfo}>
        <img src={props.photo} alt='Random' />
        <div className={s.postLikes}>Likes: {props.likesCount}</div>
      </div>
      <div className={s.postText}>{props.message}</div>
    </div>
  );
}

export default Post;