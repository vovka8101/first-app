import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import ErrorMsg from "../../assets/common/ErrorMsg";
import '../../assets/common/Forms.css';
import { connect } from 'react-redux';
import { Navigate } from "react-router-dom";
import { login } from "../../redux/authReducer";


const validationLoginForm = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Required!';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address!';
  }

  return errors;
};

const validationSchemaLoginForm = Yup.object().shape({
  password: Yup.string()
    .min(4, 'Must be longer than 4 characters')
    .required('Required!')
});


const Login = ({ isAuth, login, captchaUrl }) => {

  if (isAuth) {
    return <Navigate to='/profile' />
  }

  return (
    <div className="form">
      <h2 className="sign-in">Sign in</h2>
      <Formik
        initialValues={{
          email: '',
          password: '',
          rememberMe: false,
          captcha: ''
        }}
        onSubmit={(values, { setStatus, setSubmitting, resetForm }) => {
          login(values, setStatus);
          resetForm({
            values: { ...values, captcha: '' }
          })
          setSubmitting(false);
        }}
        validate={validationLoginForm}
        validationSchema={validationSchemaLoginForm}
        validateOnMount
      >
        {(formik) => {
          return <Form className="form-content">
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

            <div className="form-control">
              { captchaUrl && <>
                <img src={captchaUrl} alt="Captcha" />
                <Field type='text' name='captcha' placeholder='Captcha' value={formik.values.captcha} />
              </> }
              <ErrorMsg>{formik.status}</ErrorMsg>
            </div>

            <button type="submit" className="sign-in-button"
              disabled={formik.isSubmitting || !formik.isValid}
            >Sign In
            </button>
          </Form>
        }}
      </Formik>
    </div>
  )
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, { login })(Login);