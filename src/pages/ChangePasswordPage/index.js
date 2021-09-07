import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { Ellipsis } from 'react-css-spinners'
import { Link } from 'react-router-dom'
import * as IoIcons from "react-icons/io5"
import { resetPassword } from '../../redux/actions/AuthActions'
import './styles.css';

const Register = ({ dispatchResetPassword }) => {
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const [serverError, setServerError] = useState("")
    const [success, setSuccess] = useState("")
    const [loading, setLoading] = useState(false)
    const [isSecure, setIsSecure] = useState("password")
    const [isSecureConfirm, setIsSecureConfirm] = useState("password")
    const { token } = useParams();

    const handleOnSubmmit = (event) => {
        event.preventDefault();
        setLoading(true)
        dispatchResetPassword(
            token,
            password,
            passwordConfirm,
            () => { setSuccess("Your password was sucessfully updated."); setLoading(false); setServerError("") },
            (response) => { setServerError(response.error); setLoading(false); setSuccess("") }
        );
    };

    return (
        <div className="change-password-page">
            <div className="change-password-container">
                <form onSubmit={handleOnSubmmit}>
                    <div style={{ width: "100%", position: 'relative' }}>
                        <IoIcons.IoLockClosed size={20} className="change-password-icons" />
                        {isSecure === "password" ?
                            <IoIcons.IoEye size={20} className="change-password-icons-view" onClick={() => setIsSecure("text")} />
                            : <IoIcons.IoEyeOff size={20} className="change-password-icons-view" color="#bb86fc" onClick={() => setIsSecure("password")} />
                        }
                        <input
                            className="change-password-input"
                            type={isSecure}
                            placeholder="New password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div style={{ width: "100%", position: 'relative' }}>
                        <IoIcons.IoLockClosed size={20} className="change-password-icons" />
                        {isSecureConfirm === "password" ?
                            <IoIcons.IoEye size={20} className="change-password-icons-view" onClick={() => setIsSecureConfirm("text")} />
                            : <IoIcons.IoEyeOff size={20} className="change-password-icons-view" color="#bb86fc" onClick={() => setIsSecureConfirm("password")} />
                        }
                        <input
                            className="change-password-input"
                            type={isSecureConfirm}
                            placeholder="Confirm your password"
                            value={passwordConfirm}
                            onChange={(e) => setPasswordConfirm(e.target.value)}
                        />
                    </div>
                    {serverError ? <p className="change-password-error">{serverError}</p> : null}
                    {success ? <p className="change-password-success">{success}</p> : null}      
                    <button className="change-password-button" disabled={loading ? true : false} onClick={handleOnSubmmit}>
                        {
                            !loading ? 'Update Password' : <span> <Ellipsis color="#FFF" size={38} style={{marginTop: 3}} /></span>
                        }
                    </button>
                </form>
                <p className="change-password-create-account">Already have an account? <span><Link to="" className="change-password-link">Sign in</Link></span></p>
            </div>
            <div className="change-password-headeline">
                <div>
                    <h2 className="change-password-title">Update your <br />password now.<br /></h2>
                </div>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    dispatchResetPassword: (token, password, passwordConfirm, onSuccess, onError) =>
        dispatch(resetPassword({ token, password, passwordConfirm }, onSuccess, onError)),
});

export default connect(null, mapDispatchToProps)(Register);