import Dialogs from './Dialogs';
import { addMessage, updateMessageText } from '../../redux/dialogsReducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';


const mapStateToProps = (state) => ({
  dialogs: state.dialogs,
});

export default withAuthRedirect(connect(mapStateToProps, { addMessage, updateMessageText })(Dialogs));