import Posts from './Posts';
import { addPostActionCreator, updatePostTextActionCreator } from '../../../redux/profileReducer';
import { connect } from 'react-redux';


const mapStateToProps = (state) => ({
    posts: state.profile.posts,
    changeTextareaMsg: state.profile.changeTextareaMsg
});

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => dispatch(addPostActionCreator()),
    updateTextarea: (text) => dispatch(updatePostTextActionCreator(text))
  }
}

let PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;