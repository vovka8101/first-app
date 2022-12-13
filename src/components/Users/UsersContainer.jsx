import Users from './Users'
import { connect } from "react-redux";
import { followAC, setCurrentAC, setUsersAC, unfollowAC } from "../../redux/usersReducer";

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

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;