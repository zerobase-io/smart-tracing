/* Bootstrap */
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

/* Local Components */
import SitePage from '@/components/Site/SitePage/SitePage';

/* Images */
import HeroImage from '@/images/community.jpg';

const Communities = () => (
    <SitePage
        heroCardProps={{ src: HeroImage, top: true }}
        pageTitleProps={{
            subtext:
                'Zerobase is a free, privacy-first contact tracing platform that empowers both individuals and local officials to stop the spread of COVID-19.',
            title: 'Community and Public Officials',
        }}
    >
        <Row className="mx-3 mx-md-0 text-p-dark">
            <h2>
                <strong>Why should you partner with Zerobase?</strong>
            </h2>
            <h5 className="my-5">
                <p>
                    <strong>It’s your community’s first line of defense.</strong> Zerobase deploys contact tracing
                    across a community in a way that is anonymous, fast, and easy to use. You can allocate your time and
                    resources more efficiently, elevating your community’s ability to contain the virus. We provide you
                    with a powerful way to instantaneously track interactions with exposed individuals without invading
                    their privacy.
                </p>

                <p>
                    Zerobase empowers you to take action with conviction, such as recommending that an exposed
                    individual self-quarantine or be registered for a COVID-19 test. Zerobase is also an early warning
                    system to alert you when an outbreak begins so that you can avoid a blanket lockdown while quickly
                    and effectively deploying strategic public health resources to the places that need them the most.
                </p>

                <p>
                    The sooner you partner with Zerobase, the stronger your check-in data repository becomes, allowing
                    you to make each test administered within your community exponentially more powerful, especially in
                    places with critical public health resource limitations.
                </p>

                <p>
                    <strong>Contact tracing contains outbreaks.</strong> Research demonstrates that real-time contact
                    tracing is enough to control an outbreak of COVID-19 in a matter of weeks. If an individual is
                    exposed to COVID-19, contact tracing allows us to pinpoint any number of others who were in the same
                    place – such as a community center – as the exposed individual. Community healthcare providers, with
                    the help of Zerobase, can then provide personalized recommendations to potentially-affected people
                    in order to stop the spread with precision.
                </p>

                <p>
                    <strong>It reduces resurgence.</strong> Zerobase helps contain the spread of infection and
                    resurgence through automated notifications of an individual’s interactions when they are likely
                    infected. Epidemiologists have found that minimizing the time between symptom onset and isolation is
                    the most critical part of controlling an outbreak. Zerobase detects possible exposure to the virus
                    days before symptoms begin, and can recommend proactive isolation that will prevent a resurgence
                    without resorting to a full lockdown.
                </p>
            </h5>
            <h2>
                <strong>
                    The best time to implement Zerobase in your community was last week.
                    <br />
                    The second best time is now.
                </strong>
            </h2>
        </Row>
        <hr className="my-5" />
        <Row className="mx-3 mx-md-0">
            <Col className="text-p-dark">
                <h3>
                    <strong>Lead your community in the fight against COVID-19.</strong>
                </h3>
                <h4>Zerobase is free, it’s ready, and it saves lives.</h4>
            </Col>
            <Col xs="auto">
                <Button href="/assets/docs/zb-executive.pdf" size="lg" target="_blank" variant="p-dark">
                    See our executive sheet
                </Button>
            </Col>
        </Row>
    </SitePage>
);

export default Communities;
