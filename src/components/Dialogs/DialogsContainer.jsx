import Dialogs from './Dialogs';
import { addMessageActionCreator, updateMessageTextActionCreator } from '../../redux/dialogsReducer';
import { connect } from 'react-redux';


const mapStateToProps = (state) => ({
  dialogs: state.dialogs
});

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => dispatch(addMessageActionCreator()),
    updateInputText: (msg) => dispatch(updateMessageTextActionCreator(msg))
  }
}

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;