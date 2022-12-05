import Dialogs from './Dialogs';
import { addMessageActionCreator, updateMessageTextActionCreator } from '../../redux/dialogsReducer';

const DialogsContainer = (props) => {

  let state = props.store.getState();

  const onSendMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  }

  const onUpdateInputText = (msg) => {
    props.store.dispatch(updateMessageTextActionCreator(msg));
  }

  return (
    <Dialogs 
      sendMessage={onSendMessage} 
      updateInputText={onUpdateInputText} 
      dialogs={state.dialogs} />
  );
}

export default DialogsContainer;