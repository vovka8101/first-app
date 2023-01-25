import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import ErrorMsg from "./ErrorMsg";
import './Login.css';

const validationLoginForm = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Required!';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

const validationSchemaLoginForm = Yup.object().shape({
  password: Yup.string()
    .min(4, 'Must be longer than 4 characters')
    .required('Required!')
});


const Login = (props) => {
  return (
    <div className="form">
      <h2 className="sign-in">Sign in</h2>
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
          <Form className="form-content">
            <div className="form-control">
              <label htmlFor="email">Email:</label>
              <Field type='text' name='email' />
              <ErrorMessage name="email" component={ErrorMsg} />
            </div>

            <div className="form-control">
              <label htmlFor="password">Password:</label>
              <Field type='password' name='password' />
              <ErrorMessage name="password" component={ErrorMsg} />
            </div>

            <div className="form-control">
              <label className="remember">
                <Field type='checkbox' name='rememberMe' />Remember me
              </label>
            </div>

            <button type="submit">Sign In</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Login;