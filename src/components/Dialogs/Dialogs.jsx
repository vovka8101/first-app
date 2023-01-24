import s from './Dialogs.module.css';
import User from './User/User';
import Message from './Message/Message';
import { Formik, Form, Field } from 'formik';


const Dialogs = (props) => {

  const usersElements = props.dialogs.users
    .map(user => <User id={user.id} name={user.name} photo={user.imgSrc} key={user.id} />);

  const messagesElements = props.dialogs.messages
    .map(msg => <Message message={msg.message} key={msg.id} />);

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

        <Formik
          initialValues={{ message: '' }}
          onSubmit={(values, { resetForm }) => {
            props.addMessage(values.message);
            resetForm({ values: '' })
          }}
        >
          {({ values }) => (
            <Form className={s.inputArea}>
              <Field as="textarea" name="message" placeholder="Write a message..." />
              <button type="submit" disabled={!values.message}>Send</button>
            </Form>
          )}
        </Formik>
      </div>
    </div >
  );
}

export default Dialogs;