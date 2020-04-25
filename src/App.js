// Temporary disable the eslint run `no-undef` because of the global $ (jQuery)
/* eslint no-undef: 0 */

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import controller from './lib/controller';

import Primary from './components/navigation/Primary';
import Secondary from './components/navigation/Secondary';
import Footer from './components/navigation/Footer';

import RegisterModal from './components/modal/Register';
import ScanStatusModal from './components/modal/ScanStatus';
import FeedbackModal from './components/modal/Feedback';
import RegisterNotificationsModal from './components/modal/RegisterNotifications';
import PrivacyPolicyModal from './components/modal/PrivacyPolicy';

import HomePage from './components/pages/Home';
import NotFoundPage from './components/views/errors/NotFound';
import AboutUsPage from './components/pages/AboutUs';
import IndividualsLandingPage from './components/pages/IndividualsLanding';
import CommunityPage from './components/pages/Community';
import BusinessLandingPage from './components/pages/BusinessLanding';
import TestingsiteLandingPage from './components/pages/TestingsiteLanding';
import NotificationsPage from './components/pages/Notifications';
import PrivacyPage from './components/pages/Privacy';
import PrivacyLandingPage from './components/pages/PrivacyLanding';
import TermsPage from './components/pages/Terms';
import FeedbackPage from './components/pages/Feedback';
import ContactPage from './components/pages/Contact';
import VolunteerLandingPage from './components/pages/VolunteerLanding';
import OurTeamPage from './components/pages/OurTeam';
import ScanPage from './components/pages/Scan';
import BusinessRegisterPage from './components/pages/BusinessRegister';
import HealthCareRegisterPage from './components/pages/HealthCareRegister';
import TestPage from './components/pages/Test';

import Scanner from './components/components/Scanner';
import SelfReportingPage from './components/pages/SelfReporting';

const App = () => {
  // Modals --------------------------------------------------//
  $('body').on('click', '#privacy-policy', () => {
    $('#modal-privacy-policy').modal('show');
  });
  $('body').on('click', '#show-registration', () => {
    $('#modal-register-notice').modal('show');
  });
  $('body').on('click', '#show-feedback', () => {
    $('#modal-feedback').modal('show');
  });
  $('body').on('click', '#show-register-notifications', () => {
    $('#modal-register-notifications').modal('show');
  });

  // Forms (Need refactor) --------------------------------------------------//

  $('body').on('click', '#notify-submit', (e) => {
    e.preventDefault();
    if ($('#notify-agree').prop('checked') === true) {
      $('#notify-submit').addClass('btn-loading');
      controller.create_user({
        phone: $('#notify-phone').val(),
        button_id: '#notify-submit',
      });
    } else {
      $('#notify-warning').removeClass('d-none');
    }
  });

  const MainLayout = ({ children }) => {
    return (
      <>
        <div id="app">
          <div className="page">
            <Primary />
            <Secondary />
            {children}
          </div>
          <Footer />
        </div>
        <RegisterModal />
        <ScanStatusModal />
        <FeedbackModal />
        <RegisterNotificationsModal />
        <PrivacyPolicyModal />
      </>
    );
  };

  const MainLayoutRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(props) => (
          <MainLayout>
            <Component {...props} />
          </MainLayout>
        )}
      />
    );
  };

  return (
    <Router>
      <Switch>
        {/* These are all the Main Layout (header, footer, etc.) routes */}
        <MainLayoutRoute path="/about" component={AboutUsPage} />
        <MainLayoutRoute
          path="/individual"
          component={IndividualsLandingPage}
        />
        <MainLayoutRoute path="/community" component={CommunityPage} />
        <MainLayoutRoute path="/businesses" component={BusinessLandingPage} />
        <MainLayoutRoute path="/testing" component={TestingsiteLandingPage} />
        <MainLayoutRoute path="/notifications" component={NotificationsPage} />
        <MainLayoutRoute path="/privacy-policy" component={PrivacyPage} />
        <MainLayoutRoute path="/privacy" component={PrivacyLandingPage} />
        <MainLayoutRoute path="/terms" component={TermsPage} />
        <MainLayoutRoute path="/feedback" component={FeedbackPage} />
        <MainLayoutRoute path="/contact" component={ContactPage} />
        <MainLayoutRoute path="/volunteer" component={VolunteerLandingPage} />
        <MainLayoutRoute path="/team" component={OurTeamPage} />
        <MainLayoutRoute path="/scan" component={ScanPage} />
        <MainLayoutRoute
          path="/business/register"
          component={BusinessRegisterPage}
        />
        <MainLayoutRoute
          path="/healthcare/register"
          component={HealthCareRegisterPage}
        />
        <MainLayoutRoute path="/s/:sdvid" component={Scanner} />
        <MainLayoutRoute path="/test" component={TestPage} />
        <MainLayoutRoute exact path="/" component={HomePage} />

        {/* These routes are self contained they don't include the Main Layout */}
        <Route path="/self-reporting" component={SelfReportingPage} />

        {/* This is the route handler which matches when none of the routes above match */}
        <MainLayoutRoute path="*" component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default App;
