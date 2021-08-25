import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Ellipsis } from 'react-css-spinners';
import { Link } from 'react-router-dom';
import * as IoIcons from "react-icons/io5";

import { loginUser } from '../../redux/actions/AuthActions';
import './styles.css';

const RecoverPassword = ({ dispatchLoginAction }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [serverError, setServerError] = useState('');
  const [loading, setLoading] = useState(false)
  const [isSecure, setIsSecure] = useState("password")


  const handleOnSubmmit = (event) => {
    event.preventDefault();
    setLoading(true)
    dispatchLoginAction(
      email,
      password,
      () => setLoading(false),
      (response) => { setServerError(response.error); setLoading(false) }
    );
  };

  return (
    <div className="recover-password-page">
      <div className="recover-password-headeline">
        <div>
          <h1 className="recover-password-logo"></h1>
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
  dispatchLoginAction: (email, password, onSuccess, onError) =>
    dispatch(loginUser({ email, password }, onSuccess, onError)),
});

export default connect(null, mapDispatchToProps)(RecoverPassword);