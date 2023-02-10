import { NavLink } from 'react-router-dom';
import noAvatar from '../../assets/images/noAvatar.jpg';
import s from './Users.module.css';

const User = ({ user, isFollowingProcess, follow, unfollow }) => {
  return (
    <div className={s.container}>
      <div className={s.userPhoto}>
        <div className={s.ava}>
          <NavLink to={"/profile/" + user.id}>
            <img src={user.photos.small !== null ? user.photos.small : noAvatar} alt="User ava" />
          </NavLink>
        </div>
        {user.followed
          ? <button disabled={isFollowingProcess.some(item => item === user.id)}
            onClick={() => { unfollow(user.id) }}>Unfollow</button>
          : <button disabled={isFollowingProcess.some(item => item === user.id)}
            onClick={() => { follow(user.id) }}>Follow</button>
        }
      </div>
      <div className={s.userDescription}>
        <div className={s.col1}>
          <div className={s.userName}><span className={s.userFullName}>{user.name}</span> <span className={s.userNickname}>({"nickname"})</span></div>
          <div className={s.userStatus}>{user.status !== null ? user.status : "N/A"}</div>
        </div>
        <div className={s.col2}>
          <div className={s.userCountry}>{"country"},</div>
          <div className={s.userCity}>{"city"}</div>
        </div>
      </div>
    </div>
  )
};

export default User;