import React from 'react';
import { Link } from 'react-router-dom';

import ZerobaseLogo from '@images/zerobase_logo_300_white.png';

const NavbarSecondary = () => (
  // Make the z-index 1 more than the primary nav bar
  <nav
    className="navbar navbar-dark navbar-secondary navbar-expand"
    id="navbar-secondary"
    style={{ zIndex: 1032 }}
  >
    <div className="container">
      <Link className="navbar-brand navbar-brand-autodark d-none-navbar-vertical" to="/">
        <img
          className="navbar-brand-logo navbar-brand-logo-medium mr-4"
          src={ZerobaseLogo}
          alt="Zerobase"
        />
        <img
          className="navbar-brand-logo navbar-brand-logo-small"
          src={ZerobaseLogo}
          alt="Zerobase"
        />
        <h4 className="d-none d-sm-inline-block text-standard text-muted">
          Smart Tracing That Keeps Communities Safe
        </h4>
      </Link>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item dropdown pl-3">
          <a
            className="nav-link d-flex lh-1 text-reset p-0 text-left"
            href="#"
            data-toggle="dropdown"
          >
            <svg
              className="feather feather-plus-circle"
              xmlns="http://www.w3.org/2000/svg"
              width={28}
              height={28}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx={12} cy={12} r={10} />
              <line x1={12} y1={8} x2={12} y2={16} />
              <line x1={8} y1={12} x2={16} y2={12} />
            </svg>
          </a>
          <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
            <div className="d-none" id="mobile-functions">
              <a className="dropdown-item" id="nav-scan" href="#">
                <i className="fe fe-maximize mr-2" />
                Scan
              </a>
              {/* <a className="dropdown-item" id="nav-code" href="#">
                <svg
                  className="mr-2"
                  height="10pt"
                  viewBox="0 0 512 512"
                  width="10pt"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m256 60v40h-40v-40zm-40 235v57h40v-57zm120 217v-40h-40v-40h-40v80zm80-297h-120v40h120zm0 80h56v-40h-56zm0 57v40h96v-97h-40v57zm-120-352h-40v60h40zm-40 180h40v-80h-40v40h-40v115h40zm-256 35v80h40v-40h60v-40zm296 80v-40h-40v40zm80 40h40v-40h-40zm96-80h40v-40h-40zm-136 40h-40v57h-40v40h80zm-120 137h40v-40h-40zm120-40v40h80v-40zm120 80v-40h-40v40zm56 40v-40h-56v40zm-136 0h40v-40h-40zm-196-257v-40h-40v40h-40v40h116v-40zm0-75h-180v-180h180zm-40-140h-100v100h100zm-30 30h-40v40h40zm402-70v180h-180v-180zm-40 40h-100v100h100zm-30 30h-40v40h40zm-442 262h180v180h-180zm40 140h100v-100h-100zm30-30h40v-40h-40zm0 0" />
                </svg>
                Device Code
              </a> */}
            </div>
            <div id="desktop-notice">
              <a className="dropdown-item disabled" id="nav-non-mobile">
                <i className="fe fe-smartphone mr-2" />
                Please visit on a smartphone to access functions
              </a>
            </div>
            <div className="d-none" id="registration-notice">
              <a className="dropdown-item" id="show-registration" href="#">
                <i className="fe fe-smartphone mr-2" />
                Enroll device to access functions
              </a>
            </div>
            <div className="dropdown-divider" />
            <a className="dropdown-item" href="mailto:info@zerobase.io">
              Contact Us
            </a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavbarSecondary;
