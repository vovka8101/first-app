import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

const validationLoginForm = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

const validationSchemaLoginForm = Yup.object().shape({
  password: Yup.string()
    .min(4, 'Must be longer than 4 characters')
    .required('Required field!')
});


const Login = (props) => {
  return (
    <div>
      <h2>Login page</h2>
      <Formik
        initialValues={{
          email: '',
          password: '',
          rememberMe: false
        }}
        onSubmit={(values) => { console.log(values) }}
        validate={validationLoginForm}
        validationSchema={validationSchemaLoginForm}
      >
        {() => (
          <Form>
            <div>
              <Field type={'text'} name={'email'} placeholder={'E-mail'} />
            </div>
            <ErrorMessage name="email" component="div" />

            <div>
              <Field type={'password'} name={'password'} placeholder={'Password'} />
            </div>
            <ErrorMessage name="password" component="div" />

            <div>
              <Field type={'checkbox'} name={'rememberMe'} />
              <label htmlFor="rememberMe">Remember me</label>
            </div>

            <button type="submit">Sign In</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Login;