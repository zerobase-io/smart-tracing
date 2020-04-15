import $ from 'jquery';
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
  $('body').on('submit', 'form.register-business', (e) => {
    e.preventDefault();
    if ($('#submit-business-agree').prop('checked') === true) {
      $('#submit-business').addClass('btn-loading');
      const formElements = {};
      $(e.currentTarget)
        .serializeArray()
        .forEach((entry) => {
          formElements[entry['name']] = entry['value'];
        });
      //formElements['modal_id'] = '#modal-register-business';
      formElements['modal_id'] = '#body-business-register';
      formElements['button_id'] = '#submit-business';
      formElements['hasTestingFacilities'] = false;
      console.log(formElements);
      controller.submit_organization(formElements);
    } else {
      $('#submit-business-warning').removeClass('d-none');
    }
  });

  $('body').on('submit', 'form.register-healthcare', (e) => {
    e.preventDefault();
    if ($('#submit-healthcare-agree').prop('checked') === true) {
      $('#submit-business').addClass('btn-loading');
      const formElements = {};
      $(e.currentTarget)
        .serializeArray()
        .forEach((entry) => {
          formElements[entry['name']] = entry['value'];
        });
      //formElements['modal_id'] = '#modal-register-healthcare';
      formElements['modal_id'] = '#body-healthcare-register';
      formElements['button_id'] = '#submit-healthcare';
      formElements['hasTestingFacilities'] =
        formElements['hasTestingFacilities'] === 'on' ? true : false;
      console.log(formElements);
      controller.submit_organization(formElements);
    } else {
      $('#submit-healthcare-warning').removeClass('d-none');
    }
  });

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

  const renderSdvidRoute = (props) => {
    const sdvid = props.match.params.dvid;
    const dvid =
      localStorage.getItem('dvid') === 'undefined'
        ? undefined
        : localStorage.getItem('dvid');
    window.history.replaceState(null, null, '/');

    if (sdvid && window.innerWidth < 750) {
      if (dvid) {
        console.log('Has registered ID on scan');
        $('#modal-scan-notice').modal('show');
        // Please note this callback pattern to pass data down the "chain"
        // Unfortunately cannot use Async Await due to coverage issues.
        controller.fetchIP({ sdvid }, (data) => {
          controller.fingerprint(data, (fingerprintData) => {
            controller.scan(fingerprintData, () => {
              return <HomePage />;
            });
          });
        });
      } else {
        console.log('Does not have registed ID on scan');
        // patch, since if user hits cancel its never routed to init
        if (window.innerWidth < 750) {
          $('#desktop-notice').addClass('d-none');
        }
        $('#mobile-functions').addClass('d-none');
        $('#registration-notice').removeClass('d-none');
        $('#modal-register-notice').modal('show');
        $('body').on('click', '#register-notice-agree', () => {
          $('#register-notice-agree').addClass('btn-loading');
          $('#modal-scan-notice').modal('show');
          controller.fetchIP({ sdvid }, (data) => {
            console.log('IP -> fingerprint:', data);
            controller.fingerprint(data, (fingerprintData) => {
              console.log('fingerprint -> create :', fingerprintData);
              controller.create(fingerprintData, (createData) => {
                console.log('create -> scan: ', createData);
                controller.scan(createData, () => {
                  return <HomePage />;
                });
              });
            });
          });
        });
      }
    } else {
      console.log('Invalid Access Point');
      return <HomePage />;
    }
  };

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
              <Route path="/scan">
                <ScanPage />
              </Route>
              <Route path="/test">
                <HomePage />
              </Route>
              <Route path="/business/register">
                <BusinessRegisterPage />
              </Route>
              <Route path="/healthcare/register">
                <HealthCareRegisterPage />
              </Route>
              <Route path="/s/:dvid" render={renderSdvidRoute} />
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
