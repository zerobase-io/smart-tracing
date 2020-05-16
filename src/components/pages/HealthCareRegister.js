// Temporary disable the eslint run `no-undef` because of the global $ (jQuery)
/* eslint jsx-a11y/anchor-is-valid: 0 */

import React, { useState } from 'react';
import styled from 'styled-components';

import controller from '../../lib/controller';
import AddressField from '../components/Form/AddressField';
import PhoneNumberField from '../components/Form/PhoneNumberField';

import InfoImage from '../../assets/img/info/1-narrow.png';

const Container = styled.div`
    padding: 0;
`;

const HealthCareRegister = () => {
    const [orgName, setOrgName] = useState('');
    const [address, setAddress] = useState(null);
    const [type, setType] = useState();
    const [contactName, setContactName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [acceptedPrivacyPolicy, setAcceptedPrivacyPolicy] = useState(false);
    const handlePrivacyPolicyCheckbox = () =>
        setAcceptedPrivacyPolicy(!acceptedPrivacyPolicy);
    const [hasTestingFacilities, setHasTestingFacilities] = useState(false);
    const handleHasTestingFacilitiesCheckbox = () =>
        setHasTestingFacilities(!hasTestingFacilities);

    const onSubmit = (e) => {
        e.preventDefault();

        if (acceptedPrivacyPolicy) {
            $('#submit-healthcare').addClass('btn-loading');
            const input = {
                org_name: orgName,
                phone: phoneNumber,
                email,
                type,
                contact_name: contactName,
                premise: (address && address.premise) || '',
                thoroughfare: (address && address.thoroughfare) || '',
                locality: (address && address.locality) || '',
                administrativeArea:
                    (address && address.administrativeArea) || '',
                postalCode: (address && address.postalCode) || '',
                country: (address && address.country) || '',
                modal_id: '#body-healthcare-register',
                button_id: '#submit-healthcare',
                hasTestingFacilities,
            };
            console.log('Registering business...', input);
            controller.submit_organization(input);
        } else {
            $('#submit-healthcare-warning').removeClass('d-none');
        }
    };

    return (
        <div className="content">
            <Container className="container">
                <div className="card">
                    <div className="card-body" id="body-healthcare-register">
                        <h3 className="mb-5">
                            Register your healthcare organization
                        </h3>
                        <div
                            className="alert alert-warning d-none"
                            role="alert"
                        >
                            Some of your information could not be verified,
                            please try again
                        </div>
                        <div
                            className="alert alert-warning d-none"
                            role="alert"
                            id="submit-healthcare-warning"
                        >
                            Please accept the privacy policy before continuing.
                        </div>
                        <div
                            className="alert alert-success d-none"
                            role="alert"
                        >
                            <i className="fe fe-check mr-2"></i>Great! Check
                            your email to access your codes &mdash;{' '}
                            <a className="alert-link" href="#" target="_blank">
                                check it out
                            </a>
                            !
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-7">
                                <form
                                    className="register-healthcare"
                                    onSubmit={onSubmit}
                                >
                                    <label className="form-label">
                                        Organization Name
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="org_name"
                                            placeholder="Organization name"
                                            required="required"
                                            value={orgName}
                                            onChange={(e) => {
                                                setOrgName(e.target.value);
                                            }}
                                        />
                                    </label>
                                    <div className="input-icon mb-2">
                                        <AddressField
                                            placeholder="Type and select location"
                                            required={true}
                                            name="org_place"
                                            onChange={(addr) => {
                                                if (!addr) {
                                                    setAddress(null);
                                                }
                                                setAddress(addr);
                                            }}
                                        />
                                    </div>
                                    <label className="form-label">
                                        Facility Type
                                    </label>
                                    <div className="mb-2">
                                        <select
                                            className="form-select healthcare-type"
                                            name="type"
                                            value="HEALTH/DOCTOR_OFFICE
                                            onChange={(e) => {
                                                setType(e.target.value);
                                            }}
                                        >
                                            <option value="HEALTH/DOCTOR_OFFICE">
                                                Doctor Office
                                            </option>
                                            <option value="HEALTH/HOSPITAL">
                                                Hospital
                                            </option>
                                            <option value="HEALTH/PHARMACY">
                                                Pharmacy
                                            </option>
                                            <option value="HEALTH/OTHER">
                                                Other
                                            </option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                name="hasTestingFacilities"
                                                onChange={
                                                    handleHasTestingFacilitiesCheckbox
                                                }
                                                checked={hasTestingFacilities}
                                            />
                                            <span className="form-check-label">
                                                Our facility administers
                                                COVID-19 tests
                                            </span>
                                        </label>
                                    </div>
                                    <label className="form-label">
                                        Point of Contact
                                    </label>
                                    <div className="input-icon mb-2">
                                        <input
                                            className="form-control"
                                            type="name"
                                            name="contact_name"
                                            placeholder="Contact name"
                                            required="required"
                                            value={contactName}
                                            onChange={(e) => {
                                                setContactName(e.target.value);
                                            }}
                                        />
                                    </div>
                                    <div className="input-icon mb-2">
                                        <input
                                            className="form-control"
                                            type="email"
                                            name="email"
                                            placeholder="Email address"
                                            required="required"
                                            value={email}
                                            onChange={(e) => {
                                                setEmail(e.target.value);
                                            }}
                                        />
                                    </div>
                                    <div className="input-icon mb-2">
                                        <PhoneNumberField
                                            placeholder="Phone number"
                                            name="phone"
                                            required={true}
                                            onChange={(phoneNum) => {
                                                if (!phoneNum) {
                                                    setPhoneNumber(null);
                                                }
                                                setPhoneNumber(phoneNum);
                                            }}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                name="agree"
                                                onChange={
                                                    handlePrivacyPolicyCheckbox
                                                }
                                                checked={acceptedPrivacyPolicy}
                                                id="submit-healthcare-agree"
                                            />
                                            <span className="form-check-label">
                                                I agree to the{' '}
                                                <a
                                                    id="privacy-policy"
                                                    href="#"
                                                    tabindex="-1"
                                                >
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
                                            id="submit-healthcare"
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
                                        src={InfoImage}
                                        alt="Man posts QR code on wall."
                                    />
                                    <div className="card-body">
                                        <div className="small">
                                            {' '}
                                            Register below to receive your
                                            unique, single-use codes by email.
                                            Print them out, attach to your
                                            intake forms.{' '}
                                            <a href="/testing">
                                                Click to learn more.
                                            </a>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <div className="small">
                                            {' '}
                                            Email us at{' '}
                                            <a href="mailto:info@zerobase.io">
                                                info@zerobase.io
                                            </a>
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
};

export default HealthCareRegister;
