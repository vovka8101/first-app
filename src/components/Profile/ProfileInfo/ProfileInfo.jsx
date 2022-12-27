import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  return (
    <div className={s.wrapper}>
      <div>
          <img className={s.ava} 
            src={!props.photos.large ? "https://picsum.photos/id/2/200/200" : props.photos.large} 
            alt="Ava" />
      </div>
      <div className={s.description}>
        <h2>{props.fullName}</h2>
        <p>About me: {props.aboutMe}</p>
        <p>Looking for a job: {props.lookingForAJob ? 'Yes' : 'No'}</p>
        <p>Looking For A Job Description: {props.lookingForAJobDescription}</p>
      </div>
    </div>
  );
}

export default ProfileInfo;