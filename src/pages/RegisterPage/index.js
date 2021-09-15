import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';
import { Ellipsis } from 'react-css-spinners';
import { Link } from 'react-router-dom';
import * as IoIcons from "react-icons/io5";

import { registerUser } from '../../redux/actions/AuthActions';
import './styles.css';

const Register = ({ dispatchRegisterUser }) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("")
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false)
  const [isSecure, setIsSecure] = useState("password")
  const [isSecureConfirm, setIsSecureConfirm] = useState("password")
  const history = useHistory();


  const handleOnSubmmit = (event) => {
    event.preventDefault();
    setLoading(true)
    dispatchRegisterUser(
      email,
      name,
      password,
      passwordConfirm,
      () => { setLoading(false); history.push(`/confirm-your-email/${name}/${email}`); },
      (response) => { setServerError(response.error); setLoading(false) }
    );
  };

  return (
    <div className="register-page">
      <div style={{paddingBottom: 40}}>
        <div className="login_logo-container">
          <IoIcons.IoGrid className="login_logo-icon" />
          <Link className="main-header_logo-text" to="/">tradingrid</Link>
        </div>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 300, marginBottom: 30, textAlign: 'center' }}>Create your account</h2>
        <div className="register-content">
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
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  placeholder="Your password"
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
                  value={passwordConfirm}
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                />
              </div>
              {serverError ? <p className="register-error">{serverError}</p> : null}
              <button className="register-button" disabled={loading ? true : false} onClick={handleOnSubmmit}>
                {
                  !loading ? 'Sign Up' : <span> <Ellipsis color="#FFF" size={38} style={{ marginTop: 3 }} /></span>
                }
              </button>
            </form>
            <p className="register-create-account">Already have an account? <span><Link to="/login" className="register-link">Sign in</Link></span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  dispatchRegisterUser: (email, name, password, passwordConfirm, onSuccess, onError) =>
    dispatch(registerUser({ email, name, password, passwordConfirm }, onSuccess, onError)),
});

export default connect(null, mapDispatchToProps)(Register);