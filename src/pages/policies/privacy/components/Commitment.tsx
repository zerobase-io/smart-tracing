/* Bootstrap */
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';

/* Local Components */
import SitePage from '@/components/Site/SitePage/SitePage';

/* Images */
import HeroImage from '@/images/zb-hero.jpg';

const Commitment = () => (
    <>
        <SitePage
            heroCardProps={{ src: HeroImage }}
            pageTitleProps={{
                id: 'commitmentTop',
                title: 'Privacy First',
            }}
        >
            <Row className="text-p-dark" lg={2} xs={1}>
                <Col>
                    <p className="h4">
                        <strong>Zerobase is designed from the ground up to put your privacy first.</strong>
                    </p>
                </Col>
                <Col>
                    <p className="lead">
                        Unlike other contact tracing mechanisms developed so far, Zerobase does not track GPS locations
                        or require downloading an application to your phone.
                    </p>
                    <p className="lead">
                        Instead, our QR network securely and privately traces the spread of COVID-19 throughout a
                        community without tracking your personal identity or your location at all hours of the day.
                    </p>
                </Col>
            </Row>
            <Row className="text-p-dark" lg={2} xs={1}>
                <Col>
                    <p className="h4">
                        <strong>Zerobase was built to help real people.</strong>
                    </p>
                </Col>
                <Col>
                    <p className="lead">
                        The best way for you to stay notified in real time of possible exposure is to securely share
                        your phone number. If we don't have access to your phone number, we'll still try to notify you
                        the next time you check in to any location, but it will take longer to let you know that you may
                        have been exposed.
                    </p>
                    <p className="lead">Any information provided is encrypted and used only to keep you informed.</p>
                </Col>
            </Row>
        </SitePage>
        <Jumbotron className="bg-teal-600" fluid>
            <Container>
                <Row>
                    <Col className="text-white">
                        <h3>We do not work with advertisers.</h3>
                        <h3>We do not sell your information.</h3>
                        <h3>We adhere to industrial standards of data security.</h3>
                    </Col>
                    <Col className="text-p-dark">
                        <h3>We firmly believe in:</h3>
                        <h2>
                            <strong>&ldquo;Big Data without Big Brother.&rdquo;</strong>
                        </h2>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    </>
);

export default Commitment;
