/* Bootstrap */
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

/* Local Components */
import Faq from './components/Faq';
import How from './components/How';
import SitePage from '@/components/Site/SitePage/SitePage';
import Who from './components/Who';

/* Images */
import HeroImage from '@/images/banner02.jpg';

const About = () => (
    <SitePage heroCardProps={{ src: HeroImage }}>
        <Row>
            <Col>
                <Tab.Container defaultActiveKey="howItWorks">
                    <Row className="mx-md-0 mx-2">
                        <Col>
                            <Tab.Content>
                                <Tab.Pane eventKey="howItWorks">
                                    <How />
                                </Tab.Pane>
                                <Tab.Pane eventKey="whoWeAre">
                                    <Who />
                                </Tab.Pane>
                                <Tab.Pane eventKey="FAQ">
                                    <Faq />
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <hr />
                            <Nav variant="pills" className="justify-content-around">
                                <Nav.Item>
                                    <Nav.Link eventKey="howItWorks" href="#howTop">
                                        How it works
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="whoWeAre" href="#whoTop">
                                        Who we are
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="FAQ" href="#faqTop">
                                        FAQ
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                    </Row>
                </Tab.Container>
            </Col>
        </Row>
        <Row className="mt-5">
            <Col>
                <h4 className="text-center">
                    <strong>
                        For press inquiries, please contact <a href="mailto:press@zerobase.io">press@zerobase.io</a>
                    </strong>
                </h4>
            </Col>
        </Row>
    </SitePage>
);

export default About;
