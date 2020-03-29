import React from 'react';

import ShieldNoticeImg from '@images/shield-notice.png';
import QrLogo from '@images/qr_logo.png';

const PageCode = () => (
  <div className="tab-pane" id="page-code">
    <div className="content">
      <div className="container d-flex flex-column justify-content-center">
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col-4">
              <a id="nav-main" href="#" style={{ color: 'inherit' }}>
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
            <div className="col-4 text-center">Device Code</div>
            <div className="col-4" />
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
                    This main code should not be used for locations.
                  </p>
                  <div className="empty-action">
                    <a className="btn btn-github" id="reveal-code" href="#">
                      OK, I Understand
                    </a>
                  </div>
                </div>
                <div className="dimmer-content">
                  <div className="p-4 text-center align-items-center" id="qrcode">
                    <img className="qr-logo-overlay" src={QrLogo} />
                  </div>
                </div>
              </div>
            </div>
            <a className="card-btn" href="#" id="generate-alt-code">
              Generate alternative code
            </a>
          </div>
        </div>
      </div>

      <footer className="footer footer-transparent">
        <div className="container">
          <div className="row text-center align-items-center flex-row-reverse">
            <div className="col-12 col-lg-auto mt-3 mt-lg-0">
              <div id="notice-alt-code">
                Alternative codes can be printed and posted for locations or businesses, or given to
                children, elderly who do not have a smartphone. You can generate up to 5 alternative
                codes. They will be shown here.
              </div>
              <div className="card" id="alternative-code-card d-none">
                <div className="list-group card-list-group" id="alternative-code-group">
                  <div className="list-group-item reveal-code-alt d-none" id="template-code-alt">
                    <div className="row row-sm align-items-center" style={{ height: '3rem' }}>
                      <div className="col">
                        <div className="text-muted title-code-alt">ALTERNATIVE CODE 1</div>
                      </div>
                      <div className="col-auto">
                        <a className="link-secondary" href="#">
                          <svg
                            className="feather feather-chevron-right"
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
                            <polyline points="9 18 15 12 9 6" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                If you require more than 5 codes please
                <a href="mailto:info@zerobase.io">contact us</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
);

export default PageCode;
