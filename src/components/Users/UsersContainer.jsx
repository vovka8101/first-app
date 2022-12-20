import Users from './Users'
import { connect } from "react-redux";
import React from 'react';
import axios from 'axios';
import { followAC, setCurrentAC, setUsersAC, unfollowAC } from "../../redux/usersReducer";

class UsersContainer extends React.Component {
  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
      this.props.setUsers(response.data);
    });
  }

  onSetCurrent = (page) => {
    this.props.setCurrent(page);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}`).then(response => {
      this.props.setUsers(response.data);
    })
  }

  render() {
    return (
      <>
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
    currentPage: state.usersPage.currentPage
  }
};


const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => dispatch(followAC(userId)),
    unfollow: (userId) => dispatch(unfollowAC(userId)),
    setUsers: (usersPage) => dispatch(setUsersAC(usersPage)),
    setCurrent: (pageNumber) => dispatch(setCurrentAC(pageNumber))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);