import s from './Users.module.css';

const Users = (props) => {

  if (props.users.length === 0) {
    props.setUsers({
      users: [
        { id: 1, nickname: 'vasya', fullName: 'Vasyl Vasylovich', location: { country: 'Ukraine', city: 'Kiev' }, status: 'Married', followed: false, imgSrc: 'https://picsum.photos/id/237/200/200' },
        { id: 2, nickname: 'kolichka5230', fullName: 'Mykola Lysenko', location: { country: 'Ukraine', city: 'Lviv' }, status: 'Clown', followed: true, imgSrc: 'https://picsum.photos/id/238/200/200' },
        { id: 3, nickname: 'vovka', fullName: 'Vovan Vovanovich', location: { country: 'Ukraine', city: 'Khmelnitsky' }, status: 'Clown x2', followed: false, imgSrc: 'https://picsum.photos/id/239/200/200' },
        { id: 4, nickname: 'ivan_kaban', fullName: 'Demon Boss', location: { country: 'Canada', city: 'Ottawa' }, status: 'Divorced', followed: true, imgSrc: 'https://picsum.photos/id/240/200/200' },
        { id: 5, nickname: 'artem4ik', fullName: 'Artem Artemovich', location: { country: 'Ukraine', city: 'Odesa' }, status: 'Randomny chel', followed: true, imgSrc: 'https://picsum.photos/id/241/200/200' }
      ]
    })
  }

  return (
    <div className={s.content}>
      <h2>Users</h2>
      {props.users.map(el => {
        return (
          <div className={s.container}>
            <div className={s.userPhoto}>
              <div className={s.ava}><img src={el.imgSrc} alt="User ava" /></div>
              {el.followed
                ? <button onClick={() => props.unfollow(el.id)}>Unfollow</button>
                : <button onClick={() => props.follow(el.id)}>Follow</button>}
            </div>
            <div className={s.userDescription}>
                <div className={s.col1}>
                  <div className={s.userName}><span className={s.userFullName}>{el.fullName}</span> <span className={s.userNickname}>({el.nickname})</span></div>
                  <div className={s.userStatus}>{el.status}</div>
                </div>
                <div className={s.col2}>
                  <div className={s.userCountry}>{el.location.country},</div>
                  <div className={s.userCity}>{el.location.city}</div>
                </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Users;