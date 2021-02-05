/* Bootstrap */
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

/* Local Components */
import SitePage from '@/components/Site/SitePage/SitePage';

/* Images */
import HeroImage from '@/images/business.jpg';

const Businesses = () => (
    <SitePage
        heroCardProps={{ src: HeroImage }}
        pageTitleProps={{
            subtext: 'Lead your community in the fight against COVID-19.',
            title: 'Businesses and Public Locations',
        }}
    >
        <Row className="text-p-dark" lg={2} xs={1}>
            <Col>
                <p className="h4">
                    <strong>
                        Zerobase is a free, privacy-first contact tracing platform that empowers both individuals and
                        local officials to stop the spread of COVID-19.
                    </strong>
                </p>
            </Col>
            <Col>
                <p className="lead">
                    Zerobase anonymously monitors the spread of the virus and warns exposed individuals to stay at home
                    and avoid infecting other members of the community.
                </p>
                <p className="lead">
                    With your help, we can keep the public healthy and businesses open, putting your community back on
                    its feet.
                </p>
            </Col>
        </Row>
        <hr />
        <div className="text-p-dark">
            <h2>
                <strong>Why should you partner with Zerobase?</strong>
            </h2>
            <h5 className="my-5">
                <p>
                    <strong>Unlike other contact tracing mechanisms developed so far,</strong> Zerobase doesn't track
                    GPS locations, require downloading an app, or require intrusive technology to be installed in your
                    building. By automatically notifying individuals to stay home if they’ve been exposed, Zerobase
                    takes the burden off you to ensure that your location and employees are safe- without any extra
                    staff.
                </p>

                <p>
                    <strong>Here’s how it works:</strong> Paper printouts with unique Zerobase QR codes are posted at
                    entrances and touchpoints of your location, for example the front door and the cash register. People
                    entering your location scan the code by simply pointing their phone’s camera at the sign – it takes
                    just a few seconds. Zerobase’s tracing technology anonymously analyzes community networks of
                    interaction to identify people who may have been exposed.
                </p>

                <p>
                    <strong>If an individual is exposed to or contracts COVID-19,</strong> public health officials can
                    use Zerobase to direct anyone who has been in their presence to self-quarantine and stop the virus
                    from spreading. In this way, Zerobase keeps your employees and your location safe.
                </p>
            </h5>
            <h2>
                <strong>At no point does an individual’s check-in get tracked alongside their identity.</strong>
            </h2>
            <h5 className="my-5">
                <p>
                    <strong>Zerobase is deployable by businesses and community touchpoints</strong> with nothing more
                    than a computer and a printer. Because of this, Zerobase can be deployed everywhere in minutes to be
                    accessible to and instantly usable by all. By joining the Zerobase network of businesses, public
                    locations, and community touchpoints, you are doing your part to end the spread of the virus and
                    revitalize your community.
                </p>
            </h5>
        </div>
        <hr className="my-5" />
        <Row>
            <Col className="text-p-dark">
                <h3>
                    <strong>
                        To start leading your community in the fight against COVID-19,
                        <br />
                        get in touch with us at <a href="mailto:info@zerobase.io">info@zerobase.io</a>
                    </strong>
                </h3>
                <h4>Zerobase is free, it’s ready, and it saves lives.</h4>
            </Col>
        </Row>
    </SitePage>
);

export default Businesses;
