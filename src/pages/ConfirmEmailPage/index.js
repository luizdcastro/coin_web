import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";

import './styles.css';

const ConfirmEmailPage = () => {
    const { name, email } = useParams()

    return (
        <div className="verification-page">
            <div>
                <p className="confirm-email_text">Hello <span style={{ fontWeight: 600 }}>{name}</span>, Almost done!</p>
                <h2 className="confirm-email_title">Verify your email.</h2>
                <p className="confirm-email_text"> We've sent an email to <span style={{ fontWeight: 600 }}>{email}</span> to verify <br /> your email address and activate your account.</p>
                <div className="confirm-email_button-container">
                    <Link to="/login" className="account-verification-button">Sign In Now</Link>
                </div>
            </div>
        </div>
    );
};

export default ConfirmEmailPage;