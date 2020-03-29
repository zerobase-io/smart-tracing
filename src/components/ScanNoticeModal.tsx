import React from 'react';

const ScanNoticeModal = () => (
  <div
    className="modal modal-blur fade"
    id="modal-scan-notice"
    tabIndex={-1}
    role="dialog"
    aria-hidden="true"
    style={{ display: 'none' }}
    data-backdrop="static"
    data-keyboard="false"
  >
    <div className="modal-dialog modal-sm modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-body text-center py-5">
          <div id="scan-notice-loading">
            <div
              className="spinner-border text-gray"
              role="status"
              style={{ width: '3.5rem', height: '3.5rem' }}
            />
            <h2 className="pt-4">Connecting...</h2>
            <div className="text-muted">This will only take a moment</div>
          </div>
          <div className="d-none" id="scan-notice-error">
            <svg
              className="feather feather-alert-octagon"
              xmlns="http://www.w3.org/2000/svg"
              width={68}
              height={68}
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fab007"
              strokeWidth={1}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" />
              <line x1={12} y1={8} x2={12} y2={12} />
              <line x1={12} y1={16} x2="12.01" y2={16} />
            </svg>
            <h2 className="pt-4" id="scan-notice-error-title">
              Error
            </h2>
            <h4 id="scan-notice-error-code" />
            <div className="text-muted" id="scan-notice-error-message">
              There was a technical error with the request. Please scan again.
            </div>
            <a
              className="btn btn-secondary btn-block mt-4"
              href="#"
              id="nav-scan"
              data-dismiss="modal"
            >
              Scan Again
            </a>
            <a className="btn btn-secondary btn-block" href="#" data-dismiss="modal">
              Cancel
            </a>
          </div>
          <div className="d-none" id="scan-notice-success">
            <svg
              className="icon icon-xl icon-thin mb-4 text-green"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <h2 className="text-green" id="scan-notice-success-title">
              Scan Succeeded
            </h2>
            <div className="text-muted" id="scan-notice-success-datetime">
              Jan 19, 2019 01:10:22
            </div>
            <svg id="scan-notice-barcode-id" style={{ width: '100%', height: '100px' }} />
            <div className="text-muted mt4">
              You've successfully scanned a Zerobase ID. Please show this message to the accepting
              party if they require it. You don't need to do anything else.
            </div>
            <div className="modal-footer">
              <div className="input-group mb-0 mt-4">
                <span className="input-group-text">
                  <input className="form-check-input m-0" type="checkbox" />
                  <a className="ml-2 text-blue" href="#">
                    Privacy Policy
                  </a>
                </span>
                <input
                  className="form-control"
                  type="text"
                  name="input-mask"
                  data-mask="(000) 000-0000"
                  data-mask-visible="true"
                  placeholder="(000) 000-0000"
                  autoComplete="off"
                />
              </div>
              <a
                className="btn btn-primary btn-block disabled mt-0"
                href="#"
                style={{ borderRadius: '0px 0px 3px 3px' }}
              >
                Keep me notified
              </a>
              <a className="btn btn-secondary btn-block mt-4" href="/">
                Continue to Zerobase
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ScanNoticeModal;
