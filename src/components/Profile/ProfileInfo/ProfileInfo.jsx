import s from './ProfileInfo.module.css';
import StatusInfoHooks from './StatusInfo/StatusInfoHooks';
import noAvatar from '../../../assets/images/noAvatar.jpg';

const ProfileInfo = (props) => {

  const handleSavePhoto = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  }

  return (
    <div className={s.wrapper}>
      <div>
        <img className={s.ava}
          src={props.photos.large || noAvatar}
          alt="Ava"
        />
        { props.isOwner && <input type='file' onChange={handleSavePhoto} /> }
      </div>
      <div className={s.description}>
        <h2>{props.fullName}</h2>
        <StatusInfoHooks status={props.status} updateProfileStatus={props.updateProfileStatus} />
        <p>About me: {props.aboutMe}</p>
        <p>Looking for a job: {props.lookingForAJob ? 'Yes' : 'No'}</p>
        <p>Looking For A Job Description: {props.lookingForAJobDescription}</p>
      </div>
    </div>
  );
}

export default ProfileInfo;