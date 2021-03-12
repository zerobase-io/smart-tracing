/* Bootstrap */
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

/* Local Components */
import SitePage from '@/components/Site/SitePage/SitePage';

/* Images */
import HeroImage from '@/images/healthcare.jpg';

const TestingSite = () => (
    <SitePage
        heroCardProps={{ src: HeroImage, top: true }}
        pageTitleProps={{
            subtext: 'Support your community in the fight against COVID-19.',
            title: 'Healthcare and Testing Sites',
        }}
    >
        <Row className="mx-3 mx-md-0 text-p-dark" lg={2} xs={1}>
            <Col>
                <p className="h4">
                    <strong>
                        Zerobase is a free, HIPAA/GDPR-compliant contact tracing platform that helps healthcare
                        providers, local officials, and individuals contain and eliminate COVID-19.
                    </strong>
                </p>
            </Col>
            <Col>
                <p className="lead">
                    Providers who administer COVID-19 tests can deploy Zerobase with nothing more than paper printouts.
                </p>
                <p className="lead">
                    Because of this, Zerobase can be used at any freestanding, mobile, and temporary testing site.
                </p>
            </Col>
        </Row>
        <hr className="my-5" />
        <Row className="mx-3 mx-md-0 text-p-dark">
            <h5>
                <p>
                    <strong>Our contact tracing platform monitors</strong> the spread of the virus throughout a
                    community and can provide individualized risk exposure scores, allowing providers to deploy scarce
                    testing and protective resources most efficiently.
                </p>

                <p>
                    <strong>Unlike other contact tracing mechanisms developed so far,</strong> Zerobase does not track
                    GPS locations, require downloading an app, or necessitate installing intrusive technology.
                </p>
            </h5>
            <hr className="my-5" />
            <Container>
                <Row className="text-p-dark">
                    <h2 className="mb-5">
                        <strong>Here's how it works:</strong>
                    </h2>
                    <Container>
                        <Row className="text-p-dark">
                            <Col className="h2 text-center" xs={2}>
                                <strong>1</strong>
                            </Col>
                            <Col xs={10}>
                                <p>
                                    Upon intake, each patient tested for COVID-19 is given a sheet of paper with a
                                    Zerobase QR code on it to scan. Each code sheet is unique and anonymous. Batches of
                                    code sheets can be printed and used at testing centers or distributed to mobile or
                                    temporary sites.
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="h2 text-center" xs={2}>
                                <strong>2</strong>
                            </Col>
                            <Col xs={10}>
                                <p>
                                    Using the patient’s trace history, Zerobase’s technology anonymously analyzes
                                    community networks of interaction to calculate a risk score for the patient based on
                                    their check-in history.
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="h2 text-center" xs={2}>
                                <strong>3</strong>
                            </Col>
                            <Col xs={10}>
                                <p>
                                    Tracing and test results will be combined to identify individuals in a community who
                                    visited the same places as the patient around the same time.
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="h2 text-center" xs={2}>
                                <strong>4</strong>
                            </Col>
                            <Col xs={10}>
                                <p>
                                    Public health officials can then notify individuals who are registered for contact
                                    who may have been exposed and advise them to self-quarantine or get tested, even
                                    before they exhibit symptoms.
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </Row>
            </Container>
            <hr className="my-5" />
            <h5>
                <p>
                    <strong>Our team will work closely with you to ensure a smooth rollout in your facilities.</strong>{' '}
                    Zerobase is designed to support our vital healthcare partners and help them stay safe as they
                    provide the critical emergency care that our communities depend on.
                </p>
            </h5>
        </Row>
        <hr className="my-5" />
        <Row className="mx-3 mx-md-0">
            <Col className="text-p-dark">
                <h3>
                    <strong>
                        To start supporting your community in the fight against COVID-19,
                        <br />
                        get in touch with us at <a href="mailto:info@zerobase.io">info@zerobase.io</a>
                    </strong>
                </h3>
                <h4>Zerobase is free, it’s ready, and it saves lives.</h4>
            </Col>
        </Row>
    </SitePage>
);

export default TestingSite;
