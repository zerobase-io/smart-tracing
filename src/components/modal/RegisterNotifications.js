/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
//import template from '../../templates/modal/register-notifications.pug';

class RegisterNotifications extends React.Component {
    render() {
        return (
            <div
                className="modal modal-blur fade"
                id="modal-register-notifications"
                tabIndex="-1"
                role="dialog"
                aria-hidden="true"
            >
                <div
                    className="modal-dialog modal-dialog-centered modal-dialog-scrollable"
                    role="document"
                >
                    <div
                        className="modal-content"
                        style={{ minHeight: '90vh' }}
                    >
                        <div className="modal-header">
                            <h5 className="modal-title">
                                Opt-in for Notifications
                            </h5>
                            <button
                                className="close"
                                type="button"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <svg
                                    className="icon"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="card">
                                <div className="card-body">
                                    <div className="px-3">
                                        <div
                                            className="DashedConnection mb-0 mx-auto d-block d-md-none"
                                            style={{ width: '200px' }}
                                        >
                                            <div className="d-flex flex-justify-between flex-items-center py-4">
                                                <span
                                                    className="avatar avatar-md avatar-shadow"
                                                    style={{
                                                        backgroundImage:
                                                            'url(/assets/img/anon-2.png)',
                                                    }}
                                                ></span>
                                                <span
                                                    role="img"
                                                    aria-label="Bell"
                                                    className="avatar avatar-lg bg-white avatar-shadow"
                                                >
                                                    🔔
                                                </span>
                                                <span
                                                    className="avatar avatar-md"
                                                    style={{
                                                        backgroundImage:
                                                            'url(/assets/img/logo_icon_200.jpg)',
                                                    }}
                                                ></span>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-center">
                                        The best way for you to stay notified of
                                        possible exposure is to securely share
                                        your phone number. If we don't have
                                        access to your phone number, we'll still
                                        try to notify you the next time you
                                        check in to any location. We keep your
                                        information safe and are proud to put
                                        your privacy first. Please read our
                                        Privacy Policy before accepting and
                                        proceeding.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="alert alert-warning text-left d-none mt-4"
                                role="alert"
                                id="notify-warning"
                            >
                                <i className="fe fe-alert-triangle mr-2"></i>
                                Please accept the privacy policy and enter a
                                valid phone number
                            </div>
                            <div
                                className="alert alert-success text-left d-none mt-4"
                                role="alert"
                                id="notify-success"
                            >
                                <i className="fe fe-check mr-2"></i>You are now
                                registered for alerts.
                            </div>
                            <div className="input-group mb-0 mt-4">
                                <span className="input-group-text">
                                    <input
                                        className="form-check-input m-0"
                                        type="checkbox"
                                        id="notify-agree"
                                    />
                                    <a
                                        className="ml-2 text-blue"
                                        id="privacy-policy"
                                    >
                                        Privacy Policy
                                    </a>
                                </span>
                                <input
                                    className="form-control"
                                    id="notify-phone"
                                    type="text"
                                    name="input-mask"
                                    data-mask="+0 (000) 000-0000"
                                    data-mask-visible="true"
                                    placeholder="+0 (000) 000-0000"
                                    autoComplete="off"
                                />
                            </div>
                            <a
                                className="btn btn-primary btn-block mt-0"
                                href="#"
                                id="notify-submit"
                                style={{ borderRadius: '0px 0px 3px 3px' }}
                            >
                                Keep me notified
                            </a>
                        </div>
                        <div className="modal-footer">
                            <button
                                className="btn btn-secondary btn-block"
                                type="button"
                                data-dismiss="modal"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RegisterNotifications;
