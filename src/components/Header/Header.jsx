import { NavLink } from 'react-router-dom';
import Logo from '../../assets/images/logo-header.png';
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
            {props.isAuth ? props.login : <NavLink to='/login'>Login</NavLink>}
          </div>
        </div>
      </div>
    </header>
  );
}


export default Header;