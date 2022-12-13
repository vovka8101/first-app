import s from './Users.module.css';
import axios from 'axios';
import userAva from '../../assets/images/userAva.jpg';
import React from 'react';

class Users extends React.Component {
  constructor(props) {
    super(props);
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
      this.props.setUsers(response.data);
    });
  }

  onSetCurrent(page) {
    this.props.setCurrent(page);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}`).then(response => {
        this.props.setUsers(response.data);
      })
  }
  
  render() {
    let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    let curP = this.props.currentPage;
    let curPF = ((curP - 5) < 0 ? 0 : curP - 4); // current page first
    let slicedPages = [
      (curP !== 1 && curP > 4) ? 1 : undefined,
      ...pages.slice(curPF, curPF + 5), 
      (curP !== pagesCount && curP < pagesCount - 5) ? pagesCount : undefined];
    return (
      <div className={s.content}>
        <div className={s.pagesBlock}>
          {slicedPages.map(p => {
            return <span className={`${p === curP && s.pageItem_active} ${s.pageItem}`} onClick={e => {this.onSetCurrent(p)}}>{p}</span>
          })}
        </div>
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