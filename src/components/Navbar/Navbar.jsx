import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import Friend from './Friends/Friend';

const Navbar = (props) => {
  const friends = props.friends
    .map(el => <Friend name={el.name} photo={el.photo} key={el.id} />)

  return (
    <nav className={s.menuNav}>
      <ul className={s.navbarItems}>
        <li><NavLink to="/profile" className={navData => navData.isActive ? s.active : undefined}>Profile</NavLink></li>
        <li><NavLink to="/dialogs" className={navData => navData.isActive ? s.active : undefined}>Messages</NavLink></li>
        <li><NavLink to="#">News</NavLink></li>
        <li><NavLink to="#">Music</NavLink></li>
        <li><NavLink to="/users" className={navData => navData.isActive ? s.active : undefined}>Users</NavLink></li>
        <li><NavLink to="#">Settings</NavLink></li>
      </ul>
      <h3 className={s.friendTitle}>Friends</h3>
      <div className={s.friendsList}>
        {friends}
      </div>
    </nav>
  );
}

export default Navbar;