import s from './Users.module.css';
import React from 'react';
import Pagination from '../../assets/common/Pagination';
import User from './User';

const Users = (props) => {
  return (
    <div className={s.content}>
      <Pagination {...props} />
      <h2>Users</h2>
      {props.users.map(el => <User key={el.id} user={el} isFollowingProcess={props.isFollowingProcess}
        follow={props.follow} unfollow={props.unfollow} />)
      }
      <Pagination {...props} />
    </div>
  );
}

export default Users;