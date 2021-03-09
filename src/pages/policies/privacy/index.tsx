/* Bootstrap */
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

/* Local Components */
import Commitment from './components/Commitment';
import Policy from './components/Policy';
import SitePage from '@/components/Site/SitePage/SitePage';

/* Images */
import HeroImage from '@/images/zb-hero.jpg';

const Privacy = () => (
    <SitePage
        heroCardProps={{ src: HeroImage }}
        pageTitleProps={{
            id: 'privacyTop',
            title: 'Privacy First',
        }}
    >
        <Row className="mx-3 mx-md-0">
            <Col>
                <Tab.Container defaultActiveKey="commitment">
                    <Row className="justify-content-center mb-5">
                        <Col md={5} xs={10}>
                            <Nav variant="pills" className="text-center justify-content-center justify-content-md-between">
                                <Nav.Item>
                                    <Nav.Link eventKey="commitment" href="#privacyTop">
                                        Our Privacy Commitment
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="policy" href="#privacyTop">
                                        Privacy Policy
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                    </Row>
                    <hr className="my-5" />
                    <Row>
                        <Col>
                            <Tab.Content>
                                <Tab.Pane eventKey="commitment">
                                    <Commitment />
                                </Tab.Pane>
                                <Tab.Pane eventKey="policy">
                                    <Policy />
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Col>
        </Row>
    </SitePage>
);

export default Privacy;
