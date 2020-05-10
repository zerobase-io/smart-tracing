/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
//import template from '../../templates/pages/volunteer_landing.pug';

class VolunteerLanding extends React.Component {
    render() {
        return (
            <div className="content pt-0">
                <div className="container-fluid w-100 p-0 mb-2 mb-md-6">
                    <div className="row">
                        <div className="col-12">
                            <div className="card mb-0">
                                <div
                                    className="hero-img-height hero-img-cover-top"
                                    style={{
                                        backgroundImage:
                                            'url(/assets/img/info/ZBHero_volunteer.jpg)',
                                        filter: 'brightness(70%)',
                                    }}
                                    alt="Nurse with clip board talking to patient."
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row m-2 mb-6">
                        <div className="title col-12 col-md-8">
                            <h2 className="align-center pb-3 mbr-fonts-style display-3">
                                Volunteer
                            </h2>
                            <h3 className="mbr-section-subtitle align-center mbr-light mbr-fonts-style display-5">
                                Join the world-wide Zerobase team.
                            </h3>
                        </div>
                    </div>
                    <div className="row m-2 mb-md-5">
                        <div className="col-lg-12 col-12">
                            <p
                                className="lead lh-180"
                                style={{ fontSize: '24px' }}
                            >
                                We are a free, privacy-first contact tracing
                                platform that empowers both individuals and
                                local officials to stop the spread of COVID-19
                                in a way that is private, easy to use, and helps
                                to alleviate the manual issues involved in
                                contact tracing and individualized testing. To
                                learn more about zerobase and the importance of
                                tracing, read our{' '}
                                <a className="text-wrap" href="/about">
                                    about page.
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container px-4">
                    <hr />
                    <div className="row mt-5">
                        <div
                            className="col-12 text-center"
                            style={{ fontSize: '30px' }}
                        >
                            <strong>
                                Thank you for your interest in volunteering!
                            </strong>
                            <br />
                            We are excited to have you!
                        </div>
                    </div>
                    <div className="row mt-5 text-center mb-5">
                        <div
                            className="col-md-6 col-12"
                            style={{ fontSize: '24px' }}
                        >
                            <strong>1. Fill out our our volunteer form</strong>
                            <br />
                            <a
                                className="btn btn-lg btn-dark my-2"
                                href="https://docs.google.com/forms/d/e/1FAIpQLSen0IZqb_MTNH5DVp3GPsAmJhT8jQA2u2isSUwJ8Pp56XG-vw/viewform"
                                target="_blank"
                            >
                                Registration Form
                            </a>
                        </div>
                        <div
                            className="col-md-6 col-12 text-center"
                            style={{ fontSize: '24px' }}
                        >
                            <strong>2. Join our slack</strong>
                            <br />
                            <a
                                className="btn btn-lg btn-dark my-2"
                                href="https://join.slack.com/t/necsi-edu/shared_invite/zt-dx9bg3ab-maC9RfhnHSGjMXkWGjS5Mw"
                                target="_blank"
                            >
                                Zerobase Slack
                            </a>
                        </div>
                    </div>
                    <hr />
                    <div className="row mt-5 pb-4">
                        <div
                            className="col-12 text-center"
                            style={{ fontSize: '30px' }}
                        >
                            <strong>
                                Join a team! Here are some channels to get you
                                started:
                            </strong>
                        </div>
                    </div>
                    <div className="row mt-5 mb-3 text-center">
                        <div className="col-md-6 col-12">
                            <a href="https://necsi-edu.slack.com/archives/C010FSAKGPQ">
                                <p style={{ fontSize: '24px' }}>
                                    <strong>#zerobase-general</strong>
                                </p>
                            </a>
                        </div>
                        <div className="col-md-6 col-12">
                            <p
                                className="align-middle"
                                style={{ fontSize: '24px' }}
                            >
                                Our main channel
                            </p>
                        </div>
                    </div>
                    <div className="row mt-5 text-center">
                        <div className="col-md-6 col-12">
                            <a href="https://necsi-edu.slack.com/archives/CV82ELK26">
                                <p style={{ fontSize: '24px' }}>
                                    <strong>#zerobase-backend</strong>
                                </p>
                            </a>
                        </div>
                        <div className="col-md-6 col-12">
                            <p
                                className="align-middle"
                                style={{ fontSize: '24px' }}
                            >
                                For backend developers
                            </p>
                        </div>
                    </div>
                    <div className="row mt-5 text-center">
                        <div className="col-md-6 col-12">
                            <a href="https://necsi-edu.slack.com/archives/C010MA2D7PU">
                                <p style={{ fontSize: '24px' }}>
                                    <strong>#zerobase-deployments</strong>
                                </p>
                            </a>
                        </div>
                        <div className="col-md-6 col-12">
                            <p
                                className="align-middle"
                                style={{ fontSize: '24px' }}
                            >
                                For deployments in the real world
                            </p>
                        </div>
                    </div>
                    <div className="row mt-5 text-center">
                        <div className="col-md-6 col-12">
                            <a href="https://necsi-edu.slack.com/archives/C010DL0BXKR">
                                <p style={{ fontSize: '24px' }}>
                                    <strong>#zerobase-frontend</strong>
                                </p>
                            </a>
                        </div>
                        <div className="col-md-6 col-12">
                            <p
                                className="align-middle"
                                style={{ fontSize: '24px' }}
                            >
                                For frontend developers, UX, and Medical
                            </p>
                        </div>
                    </div>
                    <div className="row mt-5 text-center">
                        <div className="col-md-6 col-12">
                            <a href="https://necsi-edu.slack.com/archives/CV9UKU1HR">
                                <p style={{ fontSize: '24px' }}>
                                    <strong>#zerobase-infra</strong>
                                </p>
                            </a>
                        </div>
                        <div className="col-md-6 col-12">
                            <p
                                className="align-middle"
                                style={{ fontSize: '24px' }}
                            >
                                For infrastructure and DevSecOps
                            </p>
                        </div>
                    </div>
                    <div className="row mt-5 text-center">
                        <div className="col-md-6 col-12">
                            <a href="https://necsi-edu.slack.com/archives/C0105T4K0F2">
                                <p style={{ fontSize: '24px' }}>
                                    <strong>#zerobase-product</strong>
                                </p>
                            </a>
                        </div>
                        <div className="col-md-6 col-12">
                            <p
                                className="align-middle"
                                style={{ fontSize: '24px' }}
                            >
                                For product development
                            </p>
                        </div>
                    </div>
                    <hr />
                    <div className="row mt-5 pb-4">
                        <div
                            className="col-12 text-center"
                            style={{ fontSize: '30px' }}
                        >
                            <strong>Check out our GitHub!</strong>
                            <br />
                            <a
                                className="btn btn-lg btn-dark"
                                href="https://github.com/zerobase-io/"
                                target="_blank"
                            >
                                Zerobase GitHub
                            </a>
                        </div>
                    </div>
                    <div className="row mt-5 pb-4">
                        <div className="col-12" style={{ fontSize: '30px' }}>
                            <strong>
                                Overwhelmed? Any questions? Let us know!
                            </strong>
                            <div className="form-inline">
                                <a
                                    className="text-nowrap"
                                    href="mailto://info.@zerobase.io"
                                >
                                    <p style={{ fontSize: '25px' }}>
                                        <strong>Email us &nbsp;</strong>
                                    </p>
                                </a>
                                <p style={{ fontSize: '25px' }}>
                                    {' '}
                                    or ask in &nbsp;
                                </p>
                                <a href="https://necsi-edu.slack.com/archives/C010FSAKGPQ">
                                    <p style={{ fontSize: '25px' }}>
                                        <strong>#zerobase-volunteers</strong>
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default VolunteerLanding;
