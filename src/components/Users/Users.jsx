import s from './Users.module.css';
import userAva from '../../assets/images/userAva.jpg';
import React from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  let curP = props.currentPage;
  let curPF = ((curP - 5) < 0 ? 0 : curP - 4); // current page first
  let slicedPages = [
    (curP !== 1 && curP > 4) ? 1 : undefined,
    ...pages.slice(curPF, curPF + 5),
    (curP !== pagesCount && curP < pagesCount - 5) ? pagesCount : undefined];

  return (
    <div className={s.content}>
      <div className={s.pagesBlock}>
        {slicedPages.map(p => {
          return <span className={`${p === curP && s.pageItem_active} ${s.pageItem}`} onClick={e => { props.onSetCurrent(p) }}>{p}</span>
        })}
      </div>
      <h2>Users</h2>
      {props.users.map(el => {
        return (
          <div className={s.container}>
            <div className={s.userPhoto}>
              <div className={s.ava}>
                <NavLink to={"/profile/" + el.id}>
                  <img src={el.photos.small !== null ? el.photos.small : userAva} alt="User ava" />
                </NavLink>
              </div>
              {el.followed
                ? <button onClick={() => {
                  axios.delete('https://social-network.samuraijs.com/api/1.0/follow/' + el.id, {
                    withCredentials: true
                    // headers: {
                    //   'API-KEY': 'e293e8b9-5e60-4616-9bdf-425791f224e8'
                    // }
                  })
                    .then(response => {
                      if (response.data.resultCode === 0) {
                        props.unfollow(el.id);
                      }
                    })
                }}>Unfollow</button>
                : <button onClick={() => {
                  axios.post('https://social-network.samuraijs.com/api/1.0/follow/' + el.id, {}, {
                    withCredentials: true
                  })
                    .then(response => {
                      if (response.data.resultCode === 0) {
                        props.follow(el.id);
                      }
                    })
                }}>Follow</button>
              }
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
  );
}

export default Users;