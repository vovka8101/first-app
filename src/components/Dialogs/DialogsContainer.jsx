import Dialogs from './Dialogs';
import { addMessage, updateMessageText } from '../../redux/dialogsReducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


const mapStateToProps = (state) => ({
  dialogs: state.dialogs,
});

export default compose(
  connect(mapStateToProps, { addMessage, updateMessageText }),
  withAuthRedirect
)(Dialogs);
