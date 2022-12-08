import s from './Dialogs.module.css';
import User from './User/User';
import Message from './Message/Message';

const Dialogs = (props) => {

  const usersElements = props.dialogs.users
    .map(user => <User id={user.id} name={user.name} photo={user.imgSrc} key={user.id} />);

  const messagesElements = props.dialogs.messages
    .map(msg => <Message message={msg.message} key={msg.id} />);


  const onSendMessage = () => {
    props.sendMessage();
  }

  const onUpdateInputText = (event) => {
    let msg = event.target.value;
    props.updateInputText(msg);
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
          <textarea onChange={onUpdateInputText} value={props.dialogs.currentTypedText} placeholder='Write a message...'></textarea>
          <button onClick={onSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;