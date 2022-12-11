import s from './Users.module.css';
import axios from 'axios';
import userAva from '../../assets/images/userAva.jpg';

const Users = (props) => {

  if (props.users.length === 0) {
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
        props.setUsers(response.data.items);
      });
  }

  return (
    <div className={s.content}>
      <h2>Users</h2>
      {props.users.map(el => {
        return (
          <div className={s.container}>
            <div className={s.userPhoto}>
              <div className={s.ava}><img src={el.photos.small !== null ? el.photos.small : userAva} alt="User ava" /></div>
              {el.followed
                ? <button onClick={() => props.unfollow(el.id)}>Unfollow</button>
                : <button onClick={() => props.follow(el.id)}>Follow</button>}
            </div>
            <div className={s.userDescription}>
                <div className={s.col1}>
                  <div className={s.userName}><span className={s.userFullName}>{el.name}</span> <span className={s.userNickname}>({"nickname"})</span></div>
                  <div className={s.userStatus}>{el.status !== null ? el.status : "N/A"}</div>
                </div>
                <div className={s.col2}>
                  <div className={s.userCountry}>{"country"},</div>
                  <div className={s.userCity}>{"city"}</div>
                </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Users;