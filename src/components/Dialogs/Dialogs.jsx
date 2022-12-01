import React from 'react';
import s from './Dialogs.module.css';
import User from './User/User';
import Message from './Message/Message';
import { addMessageActionCreator, updateMessageTextActionCreator } from '../../redux/state';

const Dialogs = (props) => {

  const usersElements = props.dialogs.users
    .map(user => <User id={user.id} name={user.name} photo={user.imgSrc} />);

  const messagesElements = props.dialogs.messages
    .map(msg => <Message message={msg.message} />);

  const newMessage = React.createRef();

  const sendMessage = () => {
    props.dispatch(addMessageActionCreator());
    newMessage.current.value = props.dialogs.messages.currentTypedText;
  }

  const updateInputText = () => {
    let msg = newMessage.current.value;
    props.dispatch(updateMessageTextActionCreator(msg));
  }

  return (
    <div className={s.content}>
      <h2>Dialogs</h2>
      <div className={s.dialogs}>
        <div className={s.users}>
          {usersElements}
        </div>
        <div className={s.messages}>
          {messagesElements}
        </div>
        <div className={s.inputArea}>
          <textarea onChange={updateInputText} ref={newMessage} cols='40' placeholder='Write a message...'></textarea>
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;