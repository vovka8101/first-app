import Description from './Description/Description';
import PostsContainer from './Posts/PostsContainer';
import s from './Profile.module.css';

const Profile = () => {
  return (
    <div>
      <div className={s.natureImg}>
        <img className={s.nature} src="https://picsum.photos/id/110/1200/600" alt="picsum img" />
      </div>
      <Description />
      <PostsContainer />
    </div>
  );
}

export default Profile;
