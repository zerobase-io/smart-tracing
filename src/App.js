import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import view from './view.pug';

// An example of how to use styled-components
// This is just a normal CSS, but defined through styled-components
// for a simple img tag
const Logo = styled.img`
  height: 40vmin;
  pointer-events: none;
`;

// This is an example of how you override an existing component with custom CSS
const CustomLink = styled(Link)`
  color: #61dafb;
`;

const Home = () => {
  return (
    <div className="App-container">
      <Logo src="/logo.png" alt="logo" />
      <h1>Zerobase</h1>
      <p>Privacy-First Contact Tracing for Communities</p>
      <CustomLink to="/scan" rel="noopener noreferrer">
        Scan
      </CustomLink>
    </div>
  );
};

class View extends React.Component {
  render() {
    return view.call(this, {});
  }
}

const Scan = () => {
  return (
    <div>
      <p>This is the page for scanning QR codes</p>
      <View />
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/scan">
            <Scan />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
