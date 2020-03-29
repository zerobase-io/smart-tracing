import React from 'react';

import ZerobaseLogo from '@images/zerobase_logo_300_white.png';
import LocationImg from '@images/info/business.jpg';
import HealthcareImg from '@images/info/healthcare.jpg';
import GovernmentImg from '@images/info/government.jpg';
import Avatars020 from '@images/avatars/020m.png';
import Avatars021 from '@images/avatars/021m.png';
import Avatars022 from '@images/avatars/022m.png';
import Avatars023 from '@images/avatars/023m.png';

const Home = () => (
  <div className="content pt-0 pt-lg-4">
    <div className="container" style={{ padding: 0 }}>
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="m-4 forMobile">
            <a className="btn btn-primary btn-block p-3" id="nav-scan" href="#">
              <i className="fe fe-maximize mr-2" />
              Scan Zerobase Code
            </a>
          </div>
          <div className="m-4 m-md-0">
            <div className="alert alert-standard alert-dismissible" role="alert">
              <i className="fe fe-eye mr-2" />
              Privacy comes first.
              <a
                className="ml-2"
                href="https://github.com/zerobase-io/smart-tracing/wiki"
                target="_blank"
              >
                Read more.
              </a>
              <a className="close" href="#" data-dismiss="alert" aria-label="close">
                ×
              </a>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src={LocationImg} alt="Location" />
            <div className="card-body">
              <h3 className="card-title">Are you a business or public location?</h3>
              <p>
                Play a vital role in stopping the spread of coronavirus in your community by
                enabling anonymous check-ins at your door in seconds. Community check-ins are vital
                to public health tracing efforts.
              </p>
            </div>
            <div className="card-footer">
              <div className="row align-items-center">
                <div className="col-auto">
                  <a href="#" id="landing-about">
                    Details
                  </a>
                </div>
                <div className="col-auto ml-auto forMobile">
                  <div className="justify-content-end">
                    <a className="btn btn-primary" href="#" id="landing-generate">
                      <i className="fe fe-check-square mr-2" />
                      Generate and Print QR
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="row">
            <div className="col-12 col-lg-6 order-1">
              <div className="card">
                <img className="card-img-top" src={HealthcareImg} alt="healthcare" />
                <div className="card-body">
                  <h3 className="card-title">Are you a healthcare provider?</h3>
                  <p>
                    Get actionable insight into the dynamics of the infection in your locality
                    through smart contact tracing.
                  </p>
                </div>
                <div className="card-footer">
                  <div className="row align-items-center">
                    <div className="col-auto">
                      <a href="#" id="landing-about">
                        More information
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 order-2">
              <div className="card">
                <img className="card-img-top" src={GovernmentImg} alt="Government" />
                <div className="card-body">
                  <h3 className="card-title">Are you a public official?</h3>
                  <p>
                    Deploy our powerful tracing technology to supercharge the effectiveness of every
                    COVID-19 test in your area and keep your community safe.
                  </p>
                </div>
                <div className="card-footer">
                  <div className="row align-items-center">
                    <div className="col-auto">
                      <a href="#" id="landing-about">
                        More information
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 order-0 order-lg-3">
              <div className="card">
                <div className="card-body">
                  <p>
                    If you're an <b>individual, </b>welcome! We believe smart technology built by
                    caring humans can help keep every community safe.
                    <a href="#">Learn more about Zerobase</a>
                  </p>
                </div>
                <div className="card-footer">
                  <div className="row align-items-center">
                    <div className="col-auto">
                      <a
                        href="https://necsi-edu.slack.com/join/shared_invite/zt-cu5215sg-63h4A7uCy~ehDsrfAIJ~_Q"
                        target="_blank"
                      >
                        Join our volunteers!
                      </a>
                    </div>
                    <div className="col-auto ml-auto">
                      <div className="avatar-list avatar-list-stacked">
                        <span
                          className="avatar"
                          style={{ backgroundImage: `url(${Avatars020})` }}
                        />
                        <span
                          className="avatar"
                          style={{ backgroundImage: `url(${Avatars021})` }}
                        />
                        <span
                          className="avatar"
                          style={{ backgroundImage: `url(${Avatars022})` }}
                        />
                        <span
                          className="avatar"
                          style={{ backgroundImage: `url(${Avatars023})` }}
                        />
                        <span className="avatar bg-blue-lt">GW</span>
                        <span className="avatar bg-purple-lt">EM</span>
                        <span className="avatar">+900</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer className="position-relative" id="footer-main">
      <div className="footer pt-lg-6 footer-dark bg-dark">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <h3 className="text-secondary mb-2">Smart Tracing That Keeps Communities Safe</h3>
                  <p className="lead mb-0 text-white opacity-8">
                    Built for real humans in need by real humans who care.
                  </p>
                </div>
                <div className="col-lg-5 text-lg-right mt-4 mt-lg-0">
                  <a
                    className="btn btn-white btn-icon my-2"
                    href="https://www.github.com/zerobase-io/smart-tracing/wiki"
                    target="_blank"
                  >
                    <span className="btn-inner--icon mr-2">
                      <svg
                        className="feather feather-book text-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                      </svg>
                    </span>
                    <span className="btn-inner--text">Documentation</span>
                  </a>
                  <a
                    className="btn btn-github my-2 ml-0 ml-sm-3"
                    href="https://necsi-edu.slack.com/join/shared_invite/zt-cu5215sg-63h4A7uCy~ehDsrfAIJ~_Q"
                    target="_blank"
                  >
                    Join Us
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr className="divider divider-fade divider-dark my-5" />
          <div className="row">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <a href="index.html">
                <img alt="Zerobase logo" src={ZerobaseLogo} style={{ width: '100px' }} />
              </a>
              <p className="mt-4 text-sm opacity-8 pr-lg-4">
                Zerobase builds open source technologies for public health. We believe that clever
                technology in strong communities will beat the coronavirus.
              </p>
              <ul className="nav mt-4">
                <li className="nav-item">
                  <a className="nav-link" href="https://github.com/zerobase-io" target="_blank">
                    <i className="fe fe-github" />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://www.instagram.com/zerobase.app"
                    target="_blank"
                  >
                    <i className="fe fe-instagram" />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.twitter.com/zerobaseio" target="_blank">
                    <i className="fe fe-twitter" />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://necsi-edu.slack.com/join/shared_invite/zt-cu5215sg-63h4A7uCy~ehDsrfAIJ~_Q"
                    target="_blank"
                  >
                    <i className="fe fe-slack" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-6 col-sm-4 ml-lg-auto mb-5 mb-lg-0">
              <h6 className="heading mb-3">Use Cases</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="#tabs-individuals" data-toggle="view">
                    Individual
                  </a>
                </li>
                <li>
                  <a href="#tabs-businesses" data-toggle="view">
                    Business or Location
                  </a>
                </li>
                <li>
                  <a href="#tabs-healthcare" data-toggle="view">
                    Healthcare Provider
                  </a>
                </li>
                <li>
                  <a href="https://github.com/zerobase-io/smart-tracing/wiki" target="_blank">
                    Public Official
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-6 col-sm-4 mb-5 mb-lg-0">
              <h6 className="heading mb-3">About</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="https://github.com/zerobase-io/smart-tracing/wiki" target="_blank">
                    How to Deploy
                  </a>
                </li>
                <li>
                  <a href="https://github.com/zerobase-io/smart-tracing/wiki" target="_blank">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="https://github.com/zerobase-io/smart-tracing/wiki" target="_blank">
                    HIPAA
                  </a>
                </li>
                <li>
                  <a href="https://github.com/zerobase-io/smart-tracing/wiki" target="_blank">
                    GDPR
                  </a>
                </li>
                <li>
                  <a href="https://github.com/zerobase-io/smart-tracing/wiki" target="_blank">
                    Roadmap
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-6 col-sm-4 mb-5 mb-lg-0">
              <h6 className="heading mb-3">Foundation</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Community</a>
                </li>
                <li>
                  <a href="https://github.com/zerobase-io/" target="_blank">
                    Help center
                  </a>
                </li>
                <li>
                  <a href="mailto:info@zerobase.io" target="_blank">
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr className="divider divider-fade divider-dark my-4" />
          <div className="row align-items-center justify-content-md-between pb-4">
            <div className="col-md-6">
              <div className="copyright text-sm font-weight-bold text-center text-md-left">
                © 2020{' '}
                <a
                  className="font-weight-bold"
                  href="https://github.com/zerobase-io/"
                  target="_blank"
                >
                  Zerobase
                </a>
                . All rights reserved.
              </div>
            </div>
            <div className="col-md-6">
              <ul className="nav justify-content-center justify-content-md-end mt-3 mt-md-0">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://github.com/zerobase-io/smart-tracing/wiki"
                    target="_blank"
                  >
                    Terms
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://github.com/zerobase-io/smart-tracing/wiki"
                    target="_blank"
                  >
                    Privacy
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://github.com/zerobase-io/smart-tracing/wiki"
                    target="_blank"
                  >
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
);

export default Home;
