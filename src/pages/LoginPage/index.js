import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Ellipsis } from 'react-css-spinners';
import { Link } from 'react-router-dom';
import * as IoIcons from "react-icons/io5";

import { loginUser } from '../../redux/actions/AuthActions';
import './styles.css';

const Login = ({ dispatchLoginAction }) => {
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
    <div className="login-page">
      <div className="login-headeline">
        <div>
          <h1 className="login-logo"></h1>
          <h2 className="login-title">Make your login<br />on the platform.</h2>
        </div>
      </div>
      <div className="login-container">
        <form onSubmit={handleOnSubmmit}>
          <div style={{ width: "100%", position: 'relative' }}>
            <IoIcons.IoMail size={20} className="login-icons" />
            <input
              className="login-input"
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div style={{ width: "100%", position: 'relative' }}>
            <IoIcons.IoLockClosed size={20} className="login-icons" />
            {isSecure === "password" ?
              <IoIcons.IoEye size={20} className="login-icons-view" onClick={() => setIsSecure("text")} />
              : <IoIcons.IoEyeOff size={20} className="login-icons-view" color="#bb86fc" onClick={() => setIsSecure("password")} />
            }
            <input
              className="login-input"
              type={isSecure}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div style={{ width: '100%', marginTop: 6 }}>
            <Link to="/recover-password" className="login-link">Forgot password</Link>
          </div>
          {serverError ? <p className="login-error">{serverError}</p> : null}
          <button className="login-button" disabled={loading ? true : false} onClick={handleOnSubmmit}>
            {
              !loading ? 'Sign In' : <span> <Ellipsis color="#FFF" size={38} /></span>
            }
          </button>
        </form>
        <p className="login-create-account">Don't have an account? <span><Link to="/register" className="login-link">Sign up</Link></span></p>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  dispatchLoginAction: (email, password, onSuccess, onError) =>
    dispatch(loginUser({ email, password }, onSuccess, onError)),
});

export default connect(null, mapDispatchToProps)(Login);