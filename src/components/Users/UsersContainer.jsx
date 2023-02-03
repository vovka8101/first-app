import Users from './Users'
import { connect } from "react-redux";
import React from 'react';
import { follow, unfollow, toggleFollowingProcess, requestUsers } from "../../redux/usersReducer";
import Preloader from '../../assets/common/Preloader';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { getCurrentPage, getIsFething, getisFollowInProcess, getPageSize, getTotalCount, getUsers } from '../../redux/userSelectors';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize);
  }

  onSetCurrent = (page) => {
    this.props.requestUsers(page);
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
    users: getUsers(state),
    totalCount: getTotalCount(state),
    pageSize: getPageSize(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFething(state),
    isFollowingProcess: getisFollowInProcess(state)
  }
};

export default compose(
  connect(mapStateToProps, { follow, unfollow, toggleFollowingProcess, requestUsers }),
  withAuthRedirect
)(UsersContainer);
