import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';

const NavbarPrimary = () => (
  <nav className="navbar navbar-expand-lg navbar-light navbar-primary" id="navbar-primary">
    <div className="container navbar-mobile">
      <div className="navbar-collapse">
        <h6 className="navbar-heading">Navigation</h6>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link className="nav-link" to="/home">
              Home
            </Link>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Information
            </a>
            <div className="dropdown-menu">
              <Link className="dropdown-item" to="/about">
                Overview
              </Link>
              <div className="dropdown-divider" />
              <span className="dropdown-header">Use Cases</span>
              <Link className="dropdown-item" to="/individuals">
                <i className="fe fe-user mr-2" />
                Individual
              </Link>
              <Link className="dropdown-item" to="/businesses">
                <i className="fe fe-home mr-2" />
                Business or Public Location
              </Link>
              <Link className="dropdown-item" to="/healthcare">
                <i className="fe fe-thermometer mr-2" />
                Healthcare
              </Link>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/notifications">
              Notifications
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default NavbarPrimary;
