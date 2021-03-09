/* Bootstrap */
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

/* Local Components */
import SitePage from '@/components/Site/SitePage/SitePage';

/* Images */
import HeroImage from '@/images/healthcare.jpg';

const Individuals = () => (
    <SitePage
        heroCardProps={{ src: HeroImage, top: true }}
        pageTitleProps={{
            subtext: 'Support your community in the fight against COVID-19.',
            title: 'Individuals',
        }}
    >
        <Row className="mx-3 mx-md-0 text-p-dark" lg={2} xs={1}>
            <Col>
                <p className="h4">
                    <strong>
                        Zerobase is a free, privacy-first contact tracing platform that empowers you to help your
                        community stop the spread of COVID-19.
                    </strong>
                </p>
            </Col>
            <Col>
                <p className="lead">
                    At the core of Zerobase is our QR code network that traces the spread of the virus, even among
                    individuals who aren’t showing symptoms, without GPS tracking or installing an app.
                </p>
                <p className="lead">
                    By simply scanning a QR code when you walk into a grocery store, a pharmacy, or another community
                    location, you’re helping keep yourself, your family, and your community safe while protecting your
                    privacy.
                </p>
            </Col>
        </Row>
        <hr />
        <Row className="mx-3 mx-md-0 text-p-dark">
            <h2 className="my-5">
                <strong>Here's how it works:</strong>
            </h2>
            <Container>
                <Row className="text-p-dark">
                    <Col className="h2 text-center" xs={2}>
                        <strong>1</strong>
                    </Col>
                    <Col xs={10}>
                        <p>
                            Unique Zerobase QR codes are posted at the entrances of buildings like grocery stores,
                            restaurants, pharmacies, doctor's offices, and places of worship.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col className="h2 text-center" xs={2}>
                        <strong>2</strong>
                    </Col>
                    <Col xs={10}>
                        <p>
                            Each time you visit a location, scan the code by simply pointing your phone’s camera at the
                            sign – it takes just a few seconds, and no app installation is required. Zerobase never
                            tracks your identity or monitors your GPS location. If you would like to be notified if you
                            may have been exposed to COVID-19, you may voluntarily and securely store your phone number.
                            Any information provided is encrypted and used only to keep you informed.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col className="h2 text-center" xs={2}>
                        <strong>3</strong>
                    </Col>
                    <Col xs={10}>
                        <p>
                            Our tracing technology anonymously links community networks of contact to identify people
                            who visited the same place at roughly the same time.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col className="h2 text-center" xs={2}>
                        <strong>4</strong>
                    </Col>
                    <Col xs={10}>
                        <p>
                            If someone is exposed to COVID-19, public health officials can use Zerobase to direct
                            community members who might have come into contact with them to self-quarantine and get
                            tested. In this way, Zerobase helps stop the spread of the infection proactively and flatten
                            the curve sooner.
                        </p>
                    </Col>
                </Row>
            </Container>
        </Row>
        <Row className="mx-3 mx-md-0 text-p-dark">
            <Col>
                <h3 className="mt-5 text-center">
                    By checking in anonymously to community touchpoints, you’re doing your part to keep your community
                    healthy and safe.
                </h3>
            </Col>
        </Row>
    </SitePage>
);

export default Individuals;
