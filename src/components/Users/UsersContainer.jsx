import Users from './Users'
import { connect } from "react-redux";
import React from 'react';
import { follow, unfollow, toggleFollowingProcess, getUsers } from "../../redux/usersReducer";
import Preloader from '../../assets/common/Preloader';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onSetCurrent = (page) => {
    this.props.getUsers(page);
  }

  render() {
    return (
      <>
        {this.props.isFetching && <Preloader />}
        <Users totalCount={this.props.totalCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onSetCurrent={this.onSetCurrent}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          toggleFollowingProcess={this.props.toggleFollowingProcess}
          isFollowingProcess={this.props.isFollowingProcess} />
      </>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    totalCount: state.usersPage.totalCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    isFollowingProcess: state.usersPage.isFollowInProcess
  }
};

export default compose(
  connect(mapStateToProps, { follow, unfollow, toggleFollowingProcess, getUsers }),
  withAuthRedirect
)(UsersContainer);
