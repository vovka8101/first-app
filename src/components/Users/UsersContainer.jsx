import Users from './Users'
import { connect } from "react-redux";
import React from 'react';
import { follow, setCurrent, toggleFetching, setUsers, unfollow } from "../../redux/usersReducer";
import Preloader from '../../assets/common/Preloader';
import { usersData } from '../../api/UsersApi';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleFetching(true);
    usersData.getUsers().then(data => {
      this.props.setUsers(data);
      this.props.toggleFetching(false);
    });
  }

  onSetCurrent = (page) => {
    this.props.setCurrent(page);
    this.props.toggleFetching(true);
    usersData.getUsers(page).then(data => {
      this.props.setUsers(data);
      this.props.toggleFetching(false);
    })
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
               unfollow={this.props.unfollow}/>
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
    isFetching: state.usersPage.isFetching
  }
};

export default connect(mapStateToProps, {follow, unfollow, setUsers, setCurrent, toggleFetching})(UsersContainer);