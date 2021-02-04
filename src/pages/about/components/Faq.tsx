/* Routing */
import { Link } from 'react-router-dom';

/* Bootstrap */
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

const Faq = () => (
    <>
        <Row className="mb-3 justify-content-start" id="faqTop">
            <Col xs="auto">
                <h3 className="mb-0">Frequently Asked Questions</h3>
            </Col>
        </Row>
        <Row className="mb-5 justify-content-center">
            <Tab.Container defaultActiveKey="#faq1">
                <Row>
                    <Col lg={4} xs={12}>
                        <ListGroup>
                            <ListGroup.Item action href="#faq1">
                                <strong>What is required to use Zerobase in my community?</strong>
                            </ListGroup.Item>
                            <ListGroup.Item action href="#faq2">
                                <strong>What information is collected by Zerobase?</strong>
                            </ListGroup.Item>
                            <ListGroup.Item action href="#faq3">
                                <strong>
                                    Can’t large companies do this at scale with their location history? How is Zerobase
                                    unique?
                                </strong>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col className="mt-lg-0 mt-3" lg={8} xs={12}>
                        <Tab.Content>
                            <Tab.Pane eventKey="#faq1">
                                <p>
                                    A computer and a printer are all that is required for businesses, public locations,
                                    and healthcare providers to activate Zerobase. Individual community members only
                                    need a smartphone.
                                </p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#faq2">
                                <p>
                                    An individual’s identity is never deduced by the system, and any personal
                                    information shared voluntarily is stored securely. Zerobase is built from the ground
                                    up with security and privacy in mind and abides by relevant local, state, and
                                    federal laws. To read more about how we put your privacy first, click{' '}
                                    <Link to="policies/privacy">here</Link>
                                </p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#faq3">
                                <p>
                                    Other approaches can indeed geo-tag your movements at all times. But there are
                                    tradeoffs to those approaches:
                                    <ul>
                                        <li>
                                            Location data is extremely imprecise, sometimes off by over 300 feet,
                                            especially indoors. Zerobase not only pinpoints the exact locations of
                                            community touchpoints, it is designed to focus on the specific high-traffic
                                            areas where the virus is most likely to spread - for example, inside
                                            buildings.
                                        </li>
                                        <li>
                                            While they have location history for their enrolled users, they are missing
                                            data for individuals who are not users of their platform. Zerobase is unique
                                            in that 100% of users are immediately enrolled via an instant check-in at
                                            all participating locations.
                                        </li>
                                        <li>
                                            GPS solutions log locations for the 99.99% of the day that an infected
                                            individual spends not transmitting the virus. Zerobase homes in on the
                                            critical moments in public spaces that the infection may spread, making more
                                            accurate and focused determinations.
                                        </li>
                                    </ul>
                                </p>
                                <p className="bg-gray-600 p-3 text-white">
                                    Fundamentally, location tracking is both ineffective and unnecessary. Putting
                                    privacy first is critical to establishing trust and community buy-in. In many
                                    communities, there has been significant resistance to adopting more socially
                                    intrusive automated tracking and tracing methods. Community adoption and
                                    trustworthiness have been key design criteria since Zerobase’s inception. We believe
                                    in “Big Data without Big Brother.”
                                </p>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Row>
    </>
);

export default Faq;
