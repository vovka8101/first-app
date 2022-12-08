import s from './Friend.module.css';

const Friend = (props) => {

  return (
    <div className={s.friendsItem}>
      <div className={s.friendPhoto}><img src={props.photo} alt="Frind's ava" /></div>
      <div className={s.friendName}>{props.name}</div>
    </div>
  );
}

export default Friend;