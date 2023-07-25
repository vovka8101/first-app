import './Forms.css';

const ErrorMsg = ({ children }) => {
  return <>
    <div className="error">{children ? Array.isArray(children) ?
      children.map(errMsg => <div key={errMsg}>{errMsg}</div>) : children : null}
    </div>
  </>
};

export default ErrorMsg;