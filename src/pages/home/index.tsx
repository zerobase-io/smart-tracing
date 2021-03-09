/* Bootstrap */
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

/* Local Components */
import LinkButton from '@/components/Buttons/LinkButton/LinkButton';
import LinkCard from '@/components/Cards/LinkCard/LinkCard';
import Overlay from '@/components/Cards/HeroCard/Overlay';
import SitePage from '@/components/Site/SitePage/SitePage';

/* Icons */
import { Eye } from 'react-feather';

/* Images */
import Business from '@/images/business.jpg';
import Community from '@/images/community.jpg';
import HeroImage from '@/images/banner01.jpg';
import Healthcare from '@/images/healthcare.jpg';
import ZerobaseIcon from '@/icons/zb/icon.svg';

const Home = () => (
    <SitePage
        heroCardProps={{
            src: HeroImage,
            children: (
                <Overlay>
                    <Card.Title>
                        <strong>Help Your Community End Coronavirus</strong>
                    </Card.Title>
                    <Card.Title>Essential. Anonymous. Accessible to all.</Card.Title>
                    <LinkButton
                        className="mt-5"
                        to="/policies/privacy"
                        variant="p-dark"
                    >
                        <Eye /> Read our Privacy-First Commitment
                    </LinkButton>
                </Overlay>
            ),
        }}
    >
        <Row className="mb-5 justify-content-center">
            <Col lg={4} className="d-flex justify-content-center">
                <Image src={ZerobaseIcon} height="200" width="200" alt="Zerobase Icon" />
            </Col>
            <Col className="text-p-dark">
                <h2>Our Mission</h2>
                <p className="lead">
                    The Zerobase Foundation is a nonprofit organization whose mission is to build open source public
                    health technology for the good of communities around the world. Our free, privacy-first contact
                    tracing empowers both individuals and communities to stop the spread of COVID-19.
                </p>
            </Col>
        </Row>
        <Row lg={3} md={2} sm={1} xs={1} className="justify-content-md-center">
            <Col className="mb-md-0 mb-3">
                <LinkCard
                    cardImgComp={<Card.Img src={Business} />}
                    fullCard
                    hasBorder
                    hasHover
                    info="Play a vital role in stopping the spread of coronavirus in your community by enabling anonymous check-ins at your door in seconds. Stay ahead of the curve and keep your patrons and staff safe."
                    title="Business and Public Locations"
                    to="/info/businesses"
                ></LinkCard>
            </Col>
            <Col className="mb-md-0 mb-3">
                <LinkCard
                    cardImgComp={<Card.Img src={Healthcare} />}
                    fullCard
                    hasBorder
                    hasHover
                    info="Use our powerful tracing technology to maximize the value of every COVID-19 test in your area and keep your community safe."
                    title="Testing Centers"
                    to="/info/testingSites"
                ></LinkCard>
            </Col>
            <Col className="mb-md-0 mb-3">
                <LinkCard
                    cardImgComp={<Card.Img src={Community} />}
                    fullCard
                    hasBorder
                    hasHover
                    info="Use our smart contact tracing platform to get customized, deep insight into the local dynamics of the epidemic and provide instant, individualized guidance to community members."
                    title="Public Officials"
                    to="/info/communities"
                ></LinkCard>
            </Col>
        </Row>
    </SitePage>
);

export default Home;
