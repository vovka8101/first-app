import Description from './Description/Description';
import PostsContainer from './Posts/PostsContainer';
import s from './Profile.module.css';

const Profile = (props) => {
  return (
    <div>
      <div className={s.natureImg}>
        <img className={s.nature} src="https://picsum.photos/id/110/1200/600" alt="picsum img" />
      </div>
      <Description />
      <PostsContainer store={props.store} />
    </div>
  );
}

export default Profile;
