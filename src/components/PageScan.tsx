import React from 'react';

import FilledWhiteImg from '@images/filled-white-x.png';

const PageScan = () => (
  <div className="tab-pane" id="page-scan">
    <div
      style={{
        position: 'relative',
        height: '100vh',
        background: '#000000',
        overflow: 'hidden',
      }}
    >
      <canvas
        id="canvas"
        style={{ position: 'absolute', height: '100vh', display: 'block', left: '-50vw' }}
      />
      <div className="ocrloader" style={{ position: 'absolute' }}>
        <em />
        <div />
        <span />
      </div>
      <div className="content" style={{ position: 'absolute' }}>
        <div className="container d-flex flex-column justify-content-center">
          <div className="page-header">
            <div className="row align-items-center">
              <div className="col-4">
                <a id="nav-main-x" href="#" style={{ color: 'inherit' }}>
                  <img src={FilledWhiteImg} style={{ width: '100%' }} />
                </a>
              </div>
              <div className="col-4 text-center" />
              <div className="col-4" />
            </div>
          </div>
          <div className="empty p-0" />
        </div>
      </div>
    </div>
  </div>
);

export default PageScan;
