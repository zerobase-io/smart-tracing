/* Routing */
import { Link } from 'react-router-dom';

/* Bootstrap */
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';

/* Local Components */
import NavLink from '@/components/Links/NavLink/NavLink';
import NavLinkIcon from '@/components/Links/NavLinkIcon/NavLinkIcon';

/* Icons */
import { GitHub, Instagram, Linkedin, Slack, Twitter } from 'react-feather';

/* Images */
import Logo from '@/images/branding/zerobase/logo.svg';

export default function SiteFooter() {
    return (
        <footer>
            <Jumbotron fluid className="bg-indigo-100 mb-0 pb-2">
                <Container>
                    <Row>
                        <Col md={6}>
                            <Container>
                                <Row className="justify-content-start">
                                    <Col xs="auto">
                                        <Image src={Logo} width="300" height="60" alt="Zerobase Logo" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs="auto">
                                        <p className="my-3 text-justify">
                                            The Zerobase Foundation is a nonprofit organization whose mission is to
                                            build free, open source public health technology for the good of communities
                                            around the world. Our free, privacy-first contact tracing empowers both
                                            individuals and communities to stop the spread of COVID-19.
                                        </p>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                        <Col>
                            <Container>
                                <Row className="justify-content-around">
                                    <Col xs={6}>
                                        <Nav className="flex-column">
                                            <small className="px-3">Information For</small>
                                            <NavLink to="/info/individuals">Individuals</NavLink>
                                            <NavLink to="/info/businesses">Businesses</NavLink>
                                            <NavLink to="/info/communities">Communities</NavLink>
                                            <NavLink to="/info/testingSites">Testing Facilities</NavLink>
                                        </Nav>
                                    </Col>
                                    <Col xs={6}>
                                        <Nav className="flex-column">
                                            <small className="px-3">Zerobase Foundation</small>
                                            <NavLink to="/about">About Us</NavLink>
                                            <NavLink to="/team">Our Team</NavLink>
                                            <Nav.Item>
                                                <Nav.Link href="https://airtable.com/shrnYjRudkIBlXzr9">
                                                    Contact Us
                                                </Nav.Link>
                                            </Nav.Item>
                                            <NavLink to="/policies/terms">Terms</NavLink>
                                            <NavLink to="/policies/privacy">Privacy &amp; Cookies Policy</NavLink>
                                        </Nav>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col className="d-flex justify-content-md-start justify-content-center" md={6}>
                            <Nav>
                                <NavLinkIcon
                                    href="https://github.com/zerobase-io"
                                    icon={<GitHub stroke="#066079" size="2em" />}
                                />
                                <NavLinkIcon
                                    href="https://www.instagram.com/zerobase.io"
                                    icon={<Instagram stroke="#066079" size="2em" />}
                                />
                                <NavLinkIcon
                                    href="https://necsi-edu.slack.com/join/shared_invite/zt-cu5215sg-63h4A7uCy~ehDsrfAIJ~_Q"
                                    icon={<Slack stroke="#066079" size="2em" />}
                                />
                                <NavLinkIcon
                                    href="https://www.linkedin.com/company/zerobase/"
                                    icon={<Linkedin stroke="#066079" size="2em" />}
                                />
                                <NavLinkIcon
                                    href="https://www.twitter.com/zerobaseio"
                                    icon={<Twitter stroke="#066079" size="2em" />}
                                />
                            </Nav>
                        </Col>
                        <Col className="d-flex justify-content-md-end justify-content-center" md={6}>
                            <div className="text-right py-2">
                                &copy; 2020{' '}
                                <span>
                                    <Link to="/">Zerobase</Link>.{' '}
                                </span>
                                All rights reserved. v2.0.1
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
            <Container fluid>
                <Row
                    className="bg-p-dark text-white align-items-center justify-content-md-between justify-content-center text-center"
                    md={2}
                    xs={1}
                >
                    <Col>
                        <p className="my-3">Privacy-First Contact Tracing for Communities</p>
                    </Col>
                    <Col>
                        <p className="my-3">
                            <em>Built for real humans in need by real humans who care.</em>
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
