import React from 'react';

import ShieldNoticeImg from '@images/shield-notice.png';
import QrLogo from '@images/qr_logo.png';

const PageCodeAlt = () => (
  <div className="tab-pane" id="page-code-alt">
    <div className="content">
      <div className="container d-flex flex-column justify-content-center">
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col-2">
              <a id="nav-code" href="#" style={{ color: 'inherit' }}>
                <svg
                  className="feather feather-chevron-left"
                  xmlns="http://www.w3.org/2000/svg"
                  width={32}
                  height={32}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </a>
            </div>
            <div className="col-8 text-center" id="title-code-alt">
              Alternative Code 1
            </div>
            <div className="col-2" />
          </div>
        </div>
        <div className="empty p-0">
          <div className="card">
            <div className="card-body">
              <div className="notice-code dimmer active">
                <div className="dimmer-notice">
                  <img className="p-2 w-6" src={ShieldNoticeImg} alt="Notice" />
                  <p className="empty-subtitle text-muted">
                    Only use this for printing a physical copy. Do not send this code to others.
                  </p>
                  <div className="empty-action">
                    <a className="btn btn-github" id="reveal-code" href="#">
                      OK, I Understand
                    </a>
                  </div>
                </div>
                <div className="dimmer-content">
                  <div className="p-4 text-center align-items-center" id="qrcode-alt">
                    <img className="qr-logo-overlay" src={QrLogo} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer footer-transparent">
        <div className="container">
          <div className="row text-center align-items-center flex-row-reverse">
            <div className="col-12 col-lg-auto mt-3 mt-lg-0">
              <div />
              If you require more than 5 codes please
              <a href="mailto:info@zerobase.io">contact us</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
);

export default PageCodeAlt;
