import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { verificationUser } from '../../redux/actions/UserActions'

import './styles.css';

const VerificationPage = ({ dispatchVeritication }) => {
    const { token } = useParams()
    const [activated, setActivated] = useState("Active")

    useEffect(() => {
        dispatchVeritication(
            token,
            () => setActivated("Active"),
            () => setActivated("Inactive")
        )
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token])

    return (
        <div className="verification-page">
            {activated === "Active" ?
                <div>
                    <h2 style={{ fontWeight: 700, fontSize: 60, textAlign: 'center' }}>Welcome!</h2>
                    <p style={{ fontSize: 20, textAlign: 'center', fontWeight: 300 }}>Your email address has been verified.</p>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: 20 }}>
                        <Link to="/" className="account-verification-button">Sign In Now</Link>
                    </div>
                </div>
                :
                <div>
                    <h2 style={{ fontWeight: 700, fontSize: 60, textAlign: 'center' }}>Verification failed!</h2>
                    <p style={{ fontSize: 20, textAlign: 'center', fontWeight: 300 }}>Your user was not found or your token is invalid.</p>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: 20 }}>
                        <Link to="/" className="account-verification-button">Try Again</Link>
                    </div>
                </div>
            }
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    dispatchVeritication: (token, onSuccess, onError) => dispatch(verificationUser(token, onSuccess, onError))
});

export default connect(null, mapDispatchToProps)(VerificationPage);