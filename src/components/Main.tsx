import React, { useState } from 'react';
import _ from 'lodash';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import $ from 'jquery';

// Tabs
import Home from './pages/Home';
import Individuals from './pages/Individuals';
import Notifications from './pages/Notifications';
import About from './pages/About';
import Businesses from './pages/Businesses';
import Healthcare from './pages/Healthcare';

import NavbarPrimary from './NavbarPrimary';
import NavbarSecondary from './NavbarSecondary';
import PageScan from './PageScan';
import RegisterNoticeModal from './RegisterNoticeModal';
import ScanNoticeModal from './ScanNoticeModal';

import '../addtlFunc';

type TabName = 'home' | 'about' | 'individuals' | 'businesses' | 'notifications' | 'healthcare';

const tabToComponent: { [tab in TabName]: () => JSX.Element | null } = {
  home: Home,
  about: About,
  individuals: Individuals,
  businesses: Businesses,
  notifications: Notifications,
  healthcare: Healthcare,
};

const Main = () => {
  const [registerNoticeModalIsShowing, setRegisterNoticeModalStatus] = useState(false);

  $('body').on('click', '#landing-about', () => {
    // TODO - Link to home
  });

  $('body').on('click', '#show-registration', () => {
    setRegisterNoticeModalStatus(true);
  });

  return (
    <Router>
      <div>
        <div className="d-none">
          <ul className="nav nav-tabs nav-fill" data-toggle="tabs">
            <li className="nav-item">
              <a className="nav-link active" href="#page-main" data-toggle="tab" />
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#page-scan" data-toggle="tab" />
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#page-code" data-toggle="tab" />
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#page-code-alt" data-toggle="tab" />
            </li>
          </ul>
        </div>
        <div className="tab-content">
          <div className="tab-pane active show" id="page-main">
            <div className="page">
              <NavbarPrimary />
              <NavbarSecondary />
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                {/* Add in the rest of the routes */}
                {_.map(tabToComponent, (TabContent, routeName) => (
                  <Route key={routeName} path={`/${routeName}`}>
                    <TabContent />
                  </Route>
                ))}
              </Switch>
              {/* <TabContent /> */}
            </div>
          </div>
          <PageScan />
        </div>

        <RegisterNoticeModal show={registerNoticeModalIsShowing} />
        <ScanNoticeModal />
      </div>
    </Router>
  );
};

export default Main;
