import s from './Users.module.css';
import axios from 'axios';
import userAva from '../../assets/images/userAva.jpg';
import React from 'react';

class Users extends React.Component {
  constructor(props) {
    super(props);
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
      this.props.setUsers(response.data.items);
    });
  }
  
  render() {
    return (
      <div className={s.content}>
        <h2>Users</h2>
        {this.props.users.map(el => {
          return (
            <div className={s.container}>
              <div className={s.userPhoto}>
                <div className={s.ava}><img src={el.photos.small !== null ? el.photos.small : userAva} alt="User ava" /></div>
                {el.followed
                  ? <button onClick={() => this.props.unfollow(el.id)}>Unfollow</button>
                  : <button onClick={() => this.props.follow(el.id)}>Follow</button>}
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
}

export default Users;