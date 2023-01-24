import Posts from './Posts';
import { addPost } from '../../../redux/profileReducer';
import { connect } from 'react-redux';


const mapStateToProps = (state) => ({
  posts: state.profilePage.posts
});

let PostsContainer = connect(mapStateToProps, { addPost })(Posts);

export default PostsContainer;