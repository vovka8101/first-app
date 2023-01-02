import Logo from '../../assets/images/logo-header.png';
import s from './Header.module.css';

const Header = () => {
  return (
    <header><img src={Logo} alt="logo" /></header>
  );
}


export default Header;