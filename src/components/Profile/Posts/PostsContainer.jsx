import Posts from './Posts';
import { addPostActionCreator, updatePostTextActionCreator } from '../../../redux/profileReducer';
import { connect } from 'react-redux';


const mapStateToProps = (state) => ({
    posts: state.profilePage.posts,
    changeTextareaMsg: state.profilePage.changeTextareaMsg
});

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => dispatch(addPostActionCreator()),
    updateTextarea: (text) => dispatch(updatePostTextActionCreator(text))
  }
}

let PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;