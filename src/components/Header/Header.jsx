import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/images/logo-header.png';
import { logout } from '../../redux/authReducer';
import s from './Header.module.css';

const Header = (props) => {
  return (
    <header>
      <div className={s.headerContent}>
        <div className={s.logo}>
          <img src={Logo} alt="logo" />
        </div>
        <div className={s.loginBlock}>
          <div className={s.loginBlock__login}>
            {props.isAuth
              ? <div>
                <div>{props.login}</div>
                <div><button onClick={props.logout}>Log out</button></div>
              </div>
              : <NavLink to='/login'>Login</NavLink>}
          </div>
        </div>
      </div>
    </header>
  );
}

export default connect(null, { logout })(Header);
