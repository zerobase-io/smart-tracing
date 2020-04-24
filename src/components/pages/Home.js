// Temporary disable the eslint run `no-undef` because of the global $ (jQuery)
/* eslint no-undef: 0 */

import React from 'react';
import { withRouter } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div className="content pt-0">
        <div className="container-fluid p-0">
          <div className="row" style={{ padding: 0 }}>
            <div className="col-12">
              <div className="card mb-0">
                <div
                  className="hero-img-height hero-img-cover-center"
                  style={{
                    backgroundImage:
                      'url(/assets/img/QR_Codes_Main_ZB_dark.jpg)',
                    filter: 'brightness(70%)',
                  }}
                  alt="Phone scanning Zerobase QR code."
                ></div>
                <div className="card-img-overlay text-center d-flex align-items-center">
                  <div className="container">
                    <h1 className="text-white">
                      Help Your Community End Coronavirus
                    </h1>
                    <h3 className="text-white forScreen">
                      Essential. Anonymous. Accessible to all.
                    </h3>
                    <a className="btn btn-primary mt-6 md-5" href="/privacy">
                      <i className="fe fe-eye mr-2"></i>Read Our Privacy-First
                      Commitment
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container" style={{ padding: 0 }}>
          <div className="row">
            <div className="col-12" style={{ margin: '0 auto' }}>
              <div
                className="card mt-4 mb-4 shadow-none"
                style={{ border: 'none' }}
              >
                <div className="card-body">
                  <div className="row row-sm align-items-center shadow-none">
                    <div className="col-md-4 col-12 text-center">
                      <img
                        className="w-50"
                        src="/assets/img/ZerobaseLogo_icon.png"
                        alt="Zerobase Logo"
                      />
                    </div>
                    <div className="col-md-8 col-12">
                      <h1>Our Mission</h1>
                      <p className="lead lh-190">
                        The Zerobase Foundation is a nonprofit organization
                        whose mission is to build open source public health
                        technology for the good of communities around the world.
                        Our free, privacy-first contact tracing empowers both
                        individuals and communities to stop the spread of
                        COVID-19.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-0 mt-md-4">
            <router-link
              className="col-12 col-md-4 order-1 d-flex align-items-stretch"
              to="/businesses"
              style={{ color: 'black' }}
            >
              <div className="card hover-translate-y-n10 hover-shadow-lg">
                <img
                  className="card-img-top"
                  src="/assets/img/info/ZB_containers_location.jpg"
                  alt="Man putting open sign in window."
                />
                <div className="card-body">
                  <h3 className="card-title">Business and Public Locations</h3>
                  <p>
                    Play a vital role in stopping the spread of coronavirus in
                    your community by enabling anonymous check-ins at your door
                    in seconds. Stay ahead of the curve and keep your patrons
                    and staff safe.
                  </p>
                </div>
              </div>
            </router-link>
            <router-link
              className="col-12 col-md-4 order-1 d-flex align-items-stretch"
              to="/testing"
              style={{ color: 'black' }}
            >
              <div className="card hover-translate-y-n10 hover-shadow-lg">
                <img
                  className="card-img-top"
                  src="/assets/img/info/ZB_containers_testing.jpg"
                  alt="Nurse with clip board talking to patient."
                />
                <div className="card-body">
                  <h3 className="card-title">Testing Centers</h3>
                  <p>
                    Use our powerful tracing technology to maximize the value of
                    every COVID-19 test in your area and keep your community
                    safe.
                  </p>
                </div>
              </div>
            </router-link>
            <router-link
              className="col-12 col-md-4 order-1 d-flex align-items-stretch"
              to="/community"
              style={{ color: 'black' }}
            >
              <div className="card hover-translate-y-n10 hover-shadow-lg">
                <img
                  className="card-img-top"
                  src="/assets/img/info/ZB_containers_community.jpg"
                  alt="Woman at podium speaking to audience."
                />
                <div className="card-body">
                  <h3 className="card-title">Public Officials</h3>
                  <p>
                    Use our smart contact tracing platform to get customized,
                    deep insight into the local dynamics of the epidemic and
                    provide instant, individualized guidance to community
                    members.
                  </p>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
