import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Primary from './components/navigation/Primary';
import Secondary from './components/navigation/Secondary';
import Footer from './components/navigation/Footer';
import Register from './components/modal/Register';
import ScanStatus from './components/modal/ScanStatus';
import Feedback from './components/modal/Feedback';
import RegisterNotifications from './components/modal/RegisterNotifications';
import PrivacyPolicy from './components/modal/PrivacyPolicy';
import Home from './components/pages/Home';
import Privacy from './components/pages/Privacy';

const App = () => {
  return (
    <>
      <div className="App" id="app">
        <div className="page">
          <Primary />
          <Secondary />
          <Router>
            <Switch>
              <Route path="/privacy">
                <Privacy />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Router>
        </div>
        <Footer />
      </div>
      <Register />
      {/* <RegisterBusiness /> */}
      {/* <RegisterHealthcare /> */}
      <ScanStatus />
      <Feedback />
      <RegisterNotifications />
      <PrivacyPolicy />
    </>
  );
};

export default App;
