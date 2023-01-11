import React from 'react';
import { connect } from 'react-redux';
import { userAuth } from '../../redux/authReducer';
import Header from './Header';

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.userAuth();
  }

  render() {
    return <Header login={this.props.login} isAuth={this.props.isAuth} />
  }
}

const mapStateToProps = (state) => ({
  id: state.auth.id,
  email: state.auth.email,
  login: state.auth.login,
  isAuth: state.auth.isAuth
});


export default connect(mapStateToProps, { userAuth })(HeaderContainer);