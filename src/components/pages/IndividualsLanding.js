import React from 'react';

class IndividualsLanding extends React.Component {
    render() {
        return (
            <div className="content m-0 p-0 w-100">
                <div className="container-fluid w-100 p-0 mb-2 mb-md-6">
                    <div className="row">
                        <div className="col-12">
                            <div className="card mb-0">
                                <div
                                    className="hero-img-height hero-img-cover-top"
                                    style={{
                                        backgroundImage:
                                            'url(/assets/img/info/ZB_containers_testing.jpg)',
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
                                Individuals
                            </h2>
                            <h3 className="mbr-section-subtitle align-center mbr-light mbr-fonts-style display-5">
                                Support your community in the fight against
                                COVID-19.
                            </h3>
                        </div>
                    </div>
                    <div className="row m-2 mb-md-5">
                        <div className="col-lg-6 col-12 pr-lg-5">
                            <p
                                className="h1 lh-180 mb-3"
                                style={{ fontSize: '30px' }}
                            >
                                Zerobase is a free, privacy-first contact
                                tracing platform that empowers you to help your
                                community stop the spread of COVID-19.
                            </p>
                        </div>
                        <div className="col-lg-6 col-12">
                            <p
                                className="lead lh-180"
                                style={{ fontSize: '24px' }}
                            >
                                At the core of Zerobase is our QR code network
                                that traces the spread of the virus, even among
                                individuals who aren’t showing symptoms, without
                                GPS tracking or installing an app.
                            </p>
                            <p
                                className="lead lh-180"
                                style={{ fontSize: '24px' }}
                            >
                                By simply scanning a QR code when you walk into
                                a grocery store, a pharmacy, or another
                                community location, you’re helping keep
                                yourself, your family, and your community safe
                                while protecting your privacy.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container mt-6">
                    <div className="row m-4 p-5 mt-5 border-top border-secondary pb-4 pt-4">
                        <div className="col-12" style={{ fontSize: '48px' }}>
                            <strong>Here's how it works:</strong>
                        </div>
                    </div>
                    <div className="row align-middle">
                        <div className="col-lg-3 col-3 text-center">
                            <p style={{ fontSize: '76px' }}>
                                <strong>1</strong>
                            </p>
                        </div>
                        <div className="col-lg-9 col-9 align-middle my-auto">
                            <p
                                className="align-middle"
                                style={{ fontSize: '24px' }}
                            >
                                <strong>Unique Zerobase QR codes</strong> are
                                posted at the entrances of buildings like
                                grocery stores, restaurants, pharmacies,
                                doctor's offices, and places of worship.
                            </p>
                        </div>
                    </div>
                    <div className="row align-middle">
                        <div className="col-lg-3 col-3 text-center">
                            <p style={{ fontSize: '76px' }}>
                                <strong>2</strong>
                            </p>
                        </div>
                        <div className="col-lg-9 col-9 align-middle my-auto">
                            <p
                                className="align-middle"
                                style={{ fontSize: '24px' }}
                            >
                                Each time you visit a location,
                                <strong> scan the code</strong> by simply
                                pointing your phone’s camera at the sign – it
                                takes just a few seconds, and no app
                                installation is required. Zerobase never tracks
                                your identity or monitors your GPS location. If
                                you would like to be notified if you may have
                                been exposed to COVID-19, you may voluntarily
                                and securely store your phone number. Any
                                information provided is encrypted and used only
                                to keep you informed.
                            </p>
                        </div>
                    </div>
                    <div className="row align-middle">
                        <div className="col-lg-3 col-3 text-center">
                            <p style={{ fontSize: '76px' }}>
                                <strong>3</strong>
                            </p>
                        </div>
                        <div className="col-lg-9 col-9 align-middle my-auto">
                            <p
                                className="align-middle"
                                style={{ fontSize: '24px' }}
                            >
                                Our tracing technology
                                <strong> anonymously links</strong> community
                                networks of contact to identify people who
                                visited the same place at roughly the same time.
                            </p>
                        </div>
                    </div>
                    <div className="row align-middle">
                        <div className="col-lg-3 col-3 text-center">
                            <p style={{ fontSize: '76px' }}>
                                <strong>4</strong>
                            </p>
                        </div>
                        <div className="col-lg-9 col-9 align-middle my-auto">
                            <p
                                className="align-middle"
                                style={{ fontSize: '24px' }}
                            >
                                If someone is
                                <strong> exposed to COVID-19,</strong> public
                                health officials can use Zerobase to direct
                                community members who might have come into
                                contact with them to self-quarantine and get
                                tested. In this way, Zerobase helps stop the
                                spread of the infection proactively and flatten
                                the curve sooner.
                            </p>
                        </div>
                    </div>
                    <div className="media-container-row mt-6 mb-8">
                        <div className="col-lg-12 col-12">
                            <div className="media-container-row">
                                <div className="media-content">
                                    <div className="mbr-section-text">
                                        <p
                                            className="mbr-text mb-0 mbr-fonts-style text-center"
                                            style={{ fontSize: '36px' }}
                                        >
                                            <strong>
                                                By checking in anonymously to
                                                community touchpoints, you’re
                                                doing your part to keep your
                                                community healthy and safe.
                                            </strong>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default IndividualsLanding;
