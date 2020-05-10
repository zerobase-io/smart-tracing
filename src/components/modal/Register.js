/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
//import template from '../../templates/modal/register.pug';

class Register extends React.Component {
    render() {
        return (
            <div
                className="modal modal-blur fade"
                id="modal-register-notice"
                tabIndex="-1"
                role="dialog"
                aria-hidden="true"
                data-redirect="false"
                style={{
                    display: 'none',
                }}
            >
                <div
                    className="modal-dialog modal-sm modal-dialog-centered"
                    role="document"
                >
                    <div className="modal-content">
                        <div className="modal-body text-center py-5">
                            <h3>Device Registration</h3>
                            <div className="text-muted">
                                By continuing you agree to automatically
                                register this device. You only need to do this
                                once.
                                <br />
                                <br />
                                We do not ask for any personally identifiable
                                information and do not store any personal non
                                anonymized data. Please view our
                                <a className="text-blue" id="privacy-policy">
                                    Privacy Policy
                                </a>
                                for more details
                            </div>
                        </div>
                        <div className="modal-footer">
                            <a
                                className="btn btn-primary btn-block"
                                href="#"
                                id="register-notice-agree"
                            >
                                Agree and Complete
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;
