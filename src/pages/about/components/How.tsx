/* React */
import { useState } from 'react';

/* Routing */
import { useLocation } from 'react-router-dom';

/* Bootstrap */
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

/* Local Components */
import Example from './Example';

/* Images */
import Posting from '@/images/posting.png';
import Sample from '@/images/sample-qr-code.svg';
import Scanning from '@/images/scanning.png';
import Verifying from '@/images/verifying.png';

const How = () => {
    const location = useLocation();
    const [show, setShow] = useState(new URLSearchParams(location.search)?.get('show') === 'true');

    const handleClose = () => {
        setShow(false);
    };

    return (
        <>
            <Row className="mb-3 justify-content-center" id="howTop">
                <Col xs="auto">
                    <h3 className="mb-0 text-center">How Zerobase protects your community</h3>
                </Col>
            </Row>
            <Row className="mb-5 justify-content-center">
                <Col className="d-none d-lg-flex" md={5}>
                    <Container>
                        <Row className="flex-column h-100 justify-content-between">
                            <Col xs="auto">
                                <Image src={Posting} width="100%" />
                            </Col>
                            <Col xs="auto">
                                <Image src={Scanning} width="100%" />
                            </Col>
                            <Col xs="auto">
                                <Image src={Verifying} width="100%" />
                            </Col>
                        </Row>
                    </Container>
                </Col>
                <Col>
                    <ol className="d-flex flex-wrap align-content-around h-100">
                        <li>
                            <strong>Paper printouts with unique Zerobase QR codes</strong> are posted at the entrances
                            and touchpoints of public locations like grocery store cash registers, restaurant entrances,
                            pharmacies, doctors' offices, and places of worship.
                        </li>
                        <br />
                        <li>
                            <strong>People entering a participating location scan the code</strong> – this is as simple
                            as pointing a phone’s camera at the sign; it takes just a few seconds, and no app download
                            is required.
                            <span className="d-none d-lg-block">
                                <br />
                                Here is an example code that you can scan right now:
                            </span>
                            <Image className="d-none d-lg-block mx-auto" src={Sample} width={300} />
                            Individuals may choose to share their phone number in order to be notified by public health
                            authorities (or automatically by Zerobase, if so desired) if they have been exposed. By
                            default, no personal information is required and if we don't have access to your phone
                            number, we'll still try to notify you the next time you check in to any location.
                        </li>
                        <br />
                        <li>
                            <strong>If an individual receives a COVID-19 test,</strong> they are given a sheet of paper
                            with a Zerobase QR code on it to scan as part of the intake process. Each code sheet is
                            unique and anonymous. Batches of code sheets can be printed at testing centers or
                            distributed to drive-through sites.
                        </li>
                        <br />
                        <li>
                            <strong>Zerobase’s contact tracing technology anonymously analyzes</strong> community
                            networks of interaction to identify people who visited the sameplaces at roughly the same
                            times. It then links an individual who has been tested to the individuals that they were
                            near to construct a list of individuals that may have been exposed.
                        </li>
                        <br />
                        <li>
                            <strong>Public health officials can identify</strong> the community touchpoints through
                            which the virus seems to be spreading most rapidly. They can also notify the individuals who
                            may have been exposed and advise them to self-quarantine, even before they exhibit symptoms.
                        </li>
                    </ol>
                </Col>
            </Row>
            <Example show={show} handleClose={handleClose} />
        </>
    );
};

export default How;
