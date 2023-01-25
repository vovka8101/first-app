import './Login.css';

const ErrorMsg = ({children}) => {
  return <div className="error">{children ? children : null}</div>
};

export default ErrorMsg;