import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profileReducer';
import Profile from './Profile';
import { useLocation, useNavigate, useParams } from "react-router-dom";

// wrapper to use react router's v6 hooks in class component(to use HOC pattern, like in router v5)
function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {
  componentDidMount() {
    const profileId = this.props.router.params.profileId;
    axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + profileId)
      .then(response => { this.props.setUserProfile(response.data) });
  }

  render() {
    return <Profile profile={this.props.profile} />;
  }
}

const mapStateToProps = (state) => ({ profile: state.profilePage.profile })

export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer));
