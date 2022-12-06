import { connect } from 'react-redux';
import Navbar from './Navbar';


const mapStateToProps = (state) => ({
  friends: state.navbar.friends
});

let NavbarContainer = connect(mapStateToProps, null)(Navbar);

export default NavbarContainer;