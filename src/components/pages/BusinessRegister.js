// Temporary disable the eslint run `no-undef` because of the global $ (jQuery)
/* eslint no-undef: 0 */

import React from 'react';
import styled from 'styled-components';

import controller from '../../lib/controller';
import phoneVal from '../../lib/phoneVal';
import addressVal from '../../lib/addressVal';

const Container = styled.div`
  padding: 0;
`;

class BusinessRegister extends React.Component {
  componentDidMount() {
    addressVal.init('#business', '#business-addr');
    phoneVal.init('#business-phone');

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
  }

  render() {
    return (
      <div className="content">
        <Container className="container">
          <div className="card">
            <div className="card-body" id="body-business-register">
              <h3 className="mb-5">Register your business</h3>
              <div className="alert alert-warning d-none" role="alert">
                Some of your information could not be verified, please try
                again. Having trouble? Contact info@zerobase.io.
              </div>
              <div
                className="alert alert-warning d-none"
                role="alert"
                id="submit-business-warning"
              >
                Please accept the privacy policy before continuing.
              </div>
              <div className="alert alert-success d-none" role="alert">
                <i className="fe fe-check mr-2"></i>Great! Check your email to
                access your codes &mdash;{' '}
                <a className="alert-link" href="#" target="_blank">
                  check it out
                </a>
                !
              </div>
              <div className="row">
                <div className="col-12 col-md-7">
                  <form className="register-business" autocomplete="off">
                    <label className="form-label">
                      Business Name
                      <input
                        className="form-control"
                        type="text"
                        name="org_name"
                        placeholder="Business name"
                      />
                    </label>
                    <div className="input-icon mb-2">
                      <input
                        className="form-control"
                        type="text"
                        name="org_place"
                        placeholder="Type and select location"
                        id="business-addr"
                        autocomplete="off"
                        autocorrect="off"
                        autocapitalize="none"
                        spellcheck="false"
                        required="required"
                      />
                      <input
                        type="hidden"
                        name="premise"
                        id="business-premise"
                      />
                      <input
                        type="hidden"
                        name="thoroughfare"
                        id="business-thoroughfare"
                      />
                      <input
                        type="hidden"
                        name="locality"
                        id="business-locality"
                      />
                      <input
                        type="hidden"
                        name="administrativeArea"
                        id="business-administrativeArea"
                      />
                      <input
                        type="hidden"
                        name="postalCode"
                        id="business-postalCode"
                      />
                      <input
                        type="hidden"
                        name="country"
                        id="business-country"
                      />
                    </div>
                    <label className="form-label">Business Type</label>
                    <div className="mb-2">
                      <select className="form-select business-type" name="type">
                        <option value="BUSINESS/OTHER">Other</option>
                        <option value="BUSINESS/GROCERY">Grocery</option>
                        <option value="BUSINESS/RESTAURANT">Restaurant</option>
                        <option value="FINANCIAL/BANK">Bank</option>
                      </select>
                    </div>
                    <label className="form-label">Contact Information</label>
                    <div className="input-icon mb-2">
                      <input
                        className="form-control"
                        type="name"
                        name="contact_name"
                        placeholder="Contact name"
                        required="required"
                      />
                    </div>
                    <div className="input-icon mb-2">
                      <input
                        className="form-control"
                        type="email"
                        name="email"
                        placeholder="Email address"
                        required="required"
                      />
                    </div>
                    <div className="input-icon mb-2">
                      <input
                        className="form-control"
                        type="text"
                        name="phone"
                        placeholder="Phone number"
                        id="business-phone"
                        required="required"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="agree"
                          id="submit-business-agree"
                        />
                        <span className="form-check-label">
                          I agree to the{' '}
                          <a id="privacy-policy" href="#" tabindex="-1">
                            privacy policy
                          </a>
                          .
                        </span>
                      </label>
                    </div>
                    <div className="form-footer">
                      <button
                        className="btn btn-primary btn-block"
                        type="submit"
                        id="submit-business"
                      >
                        Generate your codes
                      </button>
                    </div>
                  </form>
                </div>
                <div className="col-12 col-md-5">
                  <div className="card mt-4">
                    <img
                      className="card-img-top"
                      src="/assets/img/info/location.png"
                      alt="Cashier stands behind computer monitor with Zerobase QR code next to monitor while man posts QR code on the wall."
                    />
                    <div className="card-body">
                      <div className="small">
                        {' '}
                        Register to receive your unique codes by email. Print
                        them out, place them up at entrances, cash registers,
                        any touchpoint.{' '}
                        <a href="/businesses">Click to learn more.</a>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="small">
                        Email us at{' '}
                        <a href="mailto:info@zerobase.io">info@zerobase.io</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default BusinessRegister;
