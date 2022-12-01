import s from './User.module.css';
import { NavLink } from 'react-router-dom';

const User = (props) => {
  let path = '/dialogs/' + props.id;

  return (
    <div className={s.userItem}>
      <NavLink to={path} className={navData => navData.isActive ? s.active : undefined}>
        <div className={s.userImg}><img src={props.photo} alt="Ava" /></div>
        <div className={s.userName}>{props.name}</div>
      </NavLink>
    </div>
  );
}

export default User;