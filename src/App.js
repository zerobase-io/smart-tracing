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
                            <Route path="/business/register">
                                <BusinessRegisterPage />
                            </Route>
                            <Route path="/healthcare/register">
                                <HealthCareRegisterPage />
                            </Route>
                            <Route path="/s/:sdvid" component={Scanner} />
                            <Route path="/test">
                                <TestPage />
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
