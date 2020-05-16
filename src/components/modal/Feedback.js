/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';

class Feedback extends React.Component {
    render() {
        return (
            <div
                className="modal modal-blur fade"
                id="modal-feedback"
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
                        style={{
                            minHeight: '90vh',
                        }}
                    >
                        <div className="modal-header">
                            <h5 className="modal-title">Feedback</h5>
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
                        <div className="modal-body p-0">
                            {/* How to ignore warnings from iframes?*/}
                            <iframe
                                className="airtable-embed"
                                src="https://airtable.com/embed/shrhNLnCPVYpwihS2?backgroundColor=pink"
                                frameBorder="0"
                                width="100%"
                                height="911"
                                style={{
                                    background: 'transparent',
                                    border: '1px solid #ccc',
                                }}
                            ></iframe>
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

export default Feedback;
