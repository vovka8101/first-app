import ProfileInfo from './ProfileInfo/ProfileInfo';
import PostsContainer from './Posts/PostsContainer';
import Preloader from '../../assets/common/Preloader';

const Profile = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div>
      <ProfileInfo {...props.profile}
        status={props.status}
        updateProfileStatus={props.updateProfileStatus}
        isOwner={props.isOwner}
        savePhoto={props.savePhoto}
        updateProfileInfo={props.updateProfileInfo}
      />
      <PostsContainer />
    </div>
  );
}

export default Profile;
