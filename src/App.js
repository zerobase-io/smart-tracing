import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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

const App = () => {
  return (
    <>
      <div id="app">
        <div className="page">
          <Primary />
          <Secondary />
          <Router>
            <Switch>
              <Route path="/about">
                <AboutUsPage />
              </Route>
              <Route path="/individual">
                <IndividualsLandingPage />
              </Route>
              <Route path="/community">
                <CommunityPage />
              </Route>
              <Route path="/businesses">
                <BusinessLandingPage />
              </Route>
              <Route path="/testing">
                <TestingsiteLandingPage />
              </Route>
              <Route path="/notifications">
                <NotificationsPage />
              </Route>
              <Route path="/privacy-policy">
                <PrivacyPage />
              </Route>
              <Route path="/privacy">
                <PrivacyLandingPage />
              </Route>
              <Route path="/terms">
                <TermsPage />
              </Route>
              <Route path="/feedback">
                <FeedbackPage />
              </Route>
              <Route path="/contact">
                <ContactPage />
              </Route>
              <Route path="/volunteer">
                <VolunteerLandingPage />
              </Route>
              <Route path="/team">
                <OurTeamPage />
              </Route>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route component={NotFoundPage} />
            </Switch>
          </Router>
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

export default App;
