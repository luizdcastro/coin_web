import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Ellipsis } from 'react-css-spinners';
import { Link } from 'react-router-dom';
import * as IoIcons from "react-icons/io5";

import { forgotPassword } from '../../redux/actions/AuthActions';
import './styles.css';

const RecoverPassword = ({ dispatchForgotPassword }) => {
  const [email, setEmail] = useState("");
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState("")

  const handleOnSubmmit = (event) => {
    event.preventDefault();
    setLoading(true)
    dispatchForgotPassword(
      email,
      () => {setSuccess("The reset link was sent to your email."); setLoading(false); setServerError("") },
      (response) => { setServerError(response.error); setLoading(false); setSuccess("") }
    );
  };

  return (
    <div className="recover-password-page">
      <div className="recover-password-headeline">
        <div>
          <h2 className="recover-password-title">Recover your<br />password.</h2>
        </div>
      </div>
      <div className="recover-password-container">
        <form onSubmit={handleOnSubmmit}>
          <div style={{ width: "100%", position: 'relative' }}>
            <IoIcons.IoMail size={20} className="recover-password-icons" />
            <input
              className="recover-password-input"
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {serverError ? <p className="recover-password-error">{serverError}</p> : null}
          {success ? <p className="recover-password-success">{success}</p> : null}        
          <button className="recover-password-button" disabled={loading ? true : false} onClick={handleOnSubmmit}>
            {
              !loading ? 'Send Link' : <span> <Ellipsis color="#FFF" size={38} /></span>
            }
          </button>
        </form>
        <p className="recover-password-create-account">Remembered password? <span><Link to="/login" className="login-link">Sign in</Link></span></p>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  dispatchForgotPassword: (email, onSuccess, onError) =>
    dispatch(forgotPassword({ email }, onSuccess, onError)),
});

export default connect(null, mapDispatchToProps)(RecoverPassword);