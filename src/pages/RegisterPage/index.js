import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Ellipsis } from 'react-css-spinners';
import { Link } from 'react-router-dom';
import * as IoIcons from "react-icons/io5";

import { loginUser } from '../../redux/actions/AuthActions';
import './styles.css';

const Register = ({ dispatchLoginAction }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [serverError, setServerError] = useState('');
  const [loading, setLoading] = useState(false)
  const [isSecure, setIsSecure] = useState("password")
  const [isSecureConfirm, setIsSecureConfirm] = useState("password")

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
    <div className="register-page">
      <div className="register-container">
        <form onSubmit={handleOnSubmmit}>
          <div style={{ width: "100%", position: 'relative' }}>
            <IoIcons.IoMail size={20} className="register-icons" />
            <input
              className="register-input"
              type="email"
              placeholder="Your e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div style={{ width: "100%", position: 'relative' }}>
            <IoIcons.IoPerson size={20} className="register-icons" />
            <input
              className="register-input"
              type="email"
              placeholder="Your name"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div style={{ width: "100%", position: 'relative' }}>
            <IoIcons.IoLockClosed size={20} className="register-icons" />
            {isSecure === "password" ?
              <IoIcons.IoEye size={20} className="register-icons-view" onClick={() => setIsSecure("text")} />
              : <IoIcons.IoEyeOff size={20} className="register-icons-view" color="#bb86fc" onClick={() => setIsSecure("password")} />
            }
            <input
              className="register-input"
              type={isSecure}
              placeholder="Yor password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div style={{ width: "100%", position: 'relative' }}>
            <IoIcons.IoLockClosed size={20} className="register-icons" />
            {isSecureConfirm === "password" ?
              <IoIcons.IoEye size={20} className="register-icons-view" onClick={() => setIsSecureConfirm("text")} />
              : <IoIcons.IoEyeOff size={20} className="register-icons-view" color="#bb86fc" onClick={() => setIsSecureConfirm("password")} />
            }
            <input
              className="register-input"
              type={isSecureConfirm}
              placeholder="Confirm your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>         
          {serverError ? <p className="register-error">{serverError}</p> : null}
          <button className="register-button" disabled={loading ? true : false} onClick={handleOnSubmmit}>
            {
              !loading ? 'Sign Up' : <span> <Ellipsis color="#FFF" size={38} /></span>
            }
          </button>
        </form>
        <p className="register-create-account">Already have an account? <span><Link to="" className="register-link">Sign in</Link></span></p>
      </div>
      <div className="register-headeline">
        <div>
          <h1 className="register-logo">cointarget</h1>
          <h2 className="register-title">Level up your<br />trading strategies</h2>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  dispatchLoginAction: (email, password, onSuccess, onError) =>
    dispatch(loginUser({ email, password }, onSuccess, onError)),
});

export default connect(null, mapDispatchToProps)(Register);