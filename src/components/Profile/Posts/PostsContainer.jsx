import Posts from './Posts';
import { addPost } from '../../../redux/profileReducer';
import { connect } from 'react-redux';


const mapStateToProps = (state) => ({
  posts: state.profilePage.posts
});

export default connect(mapStateToProps, { addPost })(Posts);
