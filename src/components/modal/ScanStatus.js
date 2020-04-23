/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
//import template from '../../templates/modal/scan-status.pug';

class ScanStatus extends React.Component {
  render() {
    return (
      <div
        className="modal modal-blur fade"
        id="modal-scan-notice"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
        style={{ display: 'none' }}
        data-backdrop="static"
        data-keyboard="false"
      >
        <div
          className="modal-dialog modal-sm modal-dialog-centered"
          role="document"
        >
          <div className="modal-content py-4">
            <div
              className="modal-body text-center py-2"
              style={{ minHeight: '100vh' }}
            >
              <div className="vertical-center" id="scan-notice-loading">
                <div
                  className="spinner-border text-gray"
                  role="status"
                  style={{ width: '3.5rem', height: '3.5rem' }}
                ></div>
                <h2 className="pt-4">Connecting...</h2>
                <div className="text-muted">This will only take a moment</div>
              </div>
              <div className="d-none" id="scan-notice-error">
                <div className="px-3">
                  <div
                    className="DashedConnection mb-0 mx-auto d-block d-md-none"
                    style={{ width: '200px' }}
                  >
                    <div className="d-flex flex-justify-between flex-items-center py-4">
                      <span
                        className="avatar avatar-md avatar-shadow"
                        style={{
                          backgroundImage: 'url(/assets/img/anon-2.png)',
                        }}
                      ></span>
                      <span className="avatar avatar-lg bg-warning">
                        <i className="fe fe-x" style={{ color: 'white' }}></i>
                      </span>
                      <span
                        className="avatar avatar-md"
                        style={{
                          backgroundImage: 'url(/assets/img/logo_icon_200.jpg)',
                        }}
                      ></span>
                    </div>
                  </div>
                  <h2 className="text-center mb-4">Scan Error</h2>
                </div>
                <h4 id="scan-notice-error-code"></h4>
                <div
                  className="alert alert-warning text-center mt-4"
                  role="alert"
                >
                  <span id="scan-notice-error-message">
                    There was an error with the request. Please scan again or
                    drop us a line.
                  </span>
                </div>
                <div className="mt-4"></div>
                <p className="mb-2">Experiencing issues? Please let us know!</p>
                <div
                  className="btn btn-outline-warning btn-block btn-md"
                  id="show-feedback"
                >
                  Give us feedback
                </div>
                <div className="mt-6"></div>
                <a className="btn btn-secondary btn-block btn-md" href="/scan">
                  Scan Again
                </a>
                <a className="btn btn-secondary btn-block btn-md" href="/">
                  Continue to Zerobase
                </a>
              </div>
              <div className="d-none" id="scan-notice-success">
                <div className="px-3">
                  <div
                    className="DashedConnection mb-0 mx-auto d-block d-md-none"
                    style={{ width: '200px' }}
                  >
                    <div className="d-flex flex-justify-between flex-items-center py-4">
                      <span
                        className="avatar avatar-md avatar-shadow"
                        style={{
                          backgroundImage: 'url(/assets/img/anon-2.png)',
                        }}
                      ></span>
                      <span className="avatar avatar-lg bg-success-scan">
                        <i
                          className="fe fe-check"
                          style={{ color: 'white' }}
                        ></i>
                      </span>
                      <span
                        className="avatar avatar-md"
                        style={{
                          backgroundImage: 'url(/assets/img/logo_icon_200.jpg)',
                        }}
                      ></span>
                    </div>
                  </div>
                  <h2 className="text-center mb-4">Scan Succeeded</h2>
                  <div className="text-muted" id="scan-notice-success-datetime">
                    Jan 19, 2019 01:10:22
                  </div>
                </div>
                <div
                  className="alert alert-success text-center mt-4"
                  role="alert"
                >
                  You've successfully scanned a Zerobase ID. Please show this
                  message to the accepting party if they require it. You don't
                  need to do anything else.
                </div>
                <div
                  className="btn btn-success-scan btn-block btn-md"
                  id="show-register-notifications"
                >
                  Keep me notified
                </div>
                <div className="mt-6"></div>
                <p className="mb-2">
                  How are we doing? We'd love to hear from you!
                </p>
                <div
                  className="btn btn-outline-success-scan btn-block btn-md"
                  id="show-feedback"
                >
                  Give us feedback
                </div>
                <a className="btn btn-secondary btn-block btn-md" href="/">
                  Continue to Zerobase
                </a>
                <div className="text-muted small mt-2" id="scan-notice-id">
                  some-id
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ScanStatus;
