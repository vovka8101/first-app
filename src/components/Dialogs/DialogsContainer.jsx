import Dialogs from './Dialogs';
import { addMessageActionCreator, updateMessageTextActionCreator } from '../../redux/dialogsReducer';
import MyContext from '../../context';

const DialogsContainer = () => {

  return (
    <MyContext.Consumer>
      {store => {
        let state = store.getState();

        const onSendMessage = () => {
          store.dispatch(addMessageActionCreator());
        }

        const onUpdateInputText = (msg) => {
          store.dispatch(updateMessageTextActionCreator(msg));
        }
        return (
          <Dialogs
            sendMessage={onSendMessage}
            updateInputText={onUpdateInputText}
            dialogs={state.dialogs} />
        )
      }}
    </MyContext.Consumer>
  );
}

export default DialogsContainer;