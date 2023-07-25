import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { getProfile, getProfileStatus, updateProfileStatus, savePhoto, updateProfileInfo } from '../../redux/profileReducer';

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
  refreshProfile() {
    let profileId = this.props.router.params.profileId;
    if (!profileId) {
      profileId = this.props.userId;
    }
    this.props.getProfile(profileId);
    this.props.getProfileStatus(profileId);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.router.params.profileId !== prevProps.router.params.profileId) {
      this.refreshProfile();
    }
  }

  render() {
    return <Profile profile={this.props.profile}
      status={this.props.status}
      updateProfileStatus={this.props.updateProfileStatus}
      isOwner={!this.props.router.params.profileId}
      savePhoto={this.props.savePhoto}
      updateProfileInfo={this.props.updateProfileInfo}
    />;
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userId: state.auth.id
  }
}

export default compose(
  connect(mapStateToProps, { getProfile, getProfileStatus, updateProfileStatus, savePhoto, updateProfileInfo }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
