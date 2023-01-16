import ProfileInfo from './ProfileInfo/ProfileInfo';
import PostsContainer from './Posts/PostsContainer';
import s from './Profile.module.css';
import Preloader from '../../assets/common/Preloader';

const Profile = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div>
      <div className={s.natureImg}>
        <img className={s.nature} src="https://picsum.photos/id/110/1200/600" alt="picsum img" />
      </div>
      <ProfileInfo {...props.profile} status={props.status} updateProfileStatus={props.updateProfileStatus} />
      <PostsContainer />
    </div>
  );
}

export default Profile;
