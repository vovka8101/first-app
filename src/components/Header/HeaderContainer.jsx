import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { setUserAuth } from '../../redux/authReducer';
import Header from './Header';

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
      .then(response => {
        if (response.data.resultCode === 0) {
          const {id, email, login} = response.data.data;
          this.props.setUserAuth(id, email, login);
        } else {
          console.log(response.data.messages);
        }
      });
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


export default connect(mapStateToProps, { setUserAuth })(HeaderContainer);