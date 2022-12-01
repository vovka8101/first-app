import Description from './Description/Description';
import Posts from './Posts/Posts';
import s from './Profile.module.css';

const Profile = (props) => {
  return (
    <div>
      <div className={s.natureImg}>
        <img className={s.nature} src="https://picsum.photos/id/110/1200/600" alt="picsum img" />
      </div>
      <Description />
      <Posts profile={props.profile} dispatch={props.dispatch} />
    </div>
  );
}

export default Profile;
